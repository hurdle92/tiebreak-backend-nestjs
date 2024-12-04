import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Player } from "./entities/player.entity";
import { DataSource, Equal, Repository } from "typeorm";
import { PlayerCreateRequestDto } from "./entities/dto/request/player-create-request.dto";
import { PlayerResponseDto } from "./entities/dto/response/player-response.dto";
import { Team } from "../team/entities/team.entity";

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
    private dataSource: DataSource,
  ) {}

  /**
   * 플레이어를 생성합니다.
   *
   * @returns {Promise<LessonCreateRequestDto>}
   */
  async create(requestDto: PlayerCreateRequestDto): Promise<Player> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const team = await this.teamRepository.findOne({
        where: { id: Equal(requestDto.team_id) },
      });
      const player = requestDto.toEntity(team);
      console.log(player);
      return player;
      //   const user = await this.userRepository.findOne({
      //     where: { id: requestDto.user_id },
      //   });
      //   const court = await this.courtRepository.findOne({
      //     where: { id: Equal(requestDto.court_id) },
      //   });
      //   const lessonCoreOptions = await this.lessonCoreRepository.find({
      //     where: { id: In(requestDto.lesson_core_option_ids) },
      //   });
      //   const lessonTimeOptions = await this.lessonTimeRepository.find({
      //     where: { id: In(requestDto.lesson_time_option_ids) },
      //   });
      //   const lesson = requestDto.toEntity(user, court);

      //   const lessonCoreBridges = lessonCoreOptions.map((option) =>
      //     LessonCoreBridge.create(lesson, option),
      //   );

      //   const lessonTimeBridges = lessonTimeOptions.map((option) =>
      //     LessonTimeBridge.create(lesson, option),
      //   );
      //   lesson.lesson_core_bridges = lessonCoreBridges;
      //   lesson.lesson_time_bridges = lessonTimeBridges;
      //   await this.lessonRepository.save(lesson);
      //   await this.lessonCoreBridgeRepository.save(lessonCoreBridges);
      await queryRunner.commitTransaction();
    } catch (e) {
      await queryRunner.rollbackTransaction();
    }
  }
}
