import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Player } from "./entities/player.entity";
import { DataSource, Equal, Repository } from "typeorm";
import { PlayerCreateRequestDto } from "./entities/dto/request/player-create-request.dto";
import { PlayerResponseDto } from "./entities/dto/response/player-response.dto";
import { Team } from "../team/entities/team.entity";
import { PlayerUserBridge } from "./entities/player-user-bridge/player-user-bridge";
import { User } from "../user/entity/user.entity";

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,

    private dataSource: DataSource,
  ) {}

  /**
   * 플레이어를 생성합니다.
   * 유저정보가 존재할 시 브릿지도 함께 생성합니다.
   * 유저정보는 옵셔널.
   * 게스트일 경우 플레이어는 유저정보를 가지지 않습니다.
   *
   * @returns {Promise<LessonCreateRequestDto>}
   */
  async create(requestDto: PlayerCreateRequestDto): Promise<Player> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const { team_id, user_id } = requestDto;
      const team = await queryRunner.manager.findOne(Team, {
        where: { id: Equal(team_id) },
      });

      const user = user_id
        ? await queryRunner.manager.findOne(User, {
            where: { id: Equal(user_id) },
          })
        : null;

      const player = requestDto.toEntity(team);

      const savedPlayer = await queryRunner.manager.save(Player, player);
      if (user) {
        const playerUserBridge = PlayerUserBridge.toEntity(savedPlayer, user);
        await queryRunner.manager.save(PlayerUserBridge, playerUserBridge);
      }
      await queryRunner.commitTransaction();
      return savedPlayer;
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw e;
    } finally {
      await queryRunner.release();
    }
  }
}
