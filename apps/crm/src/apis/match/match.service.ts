import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Match } from "./entities/match.entity";
import { DataSource, Repository } from "typeorm";
import { MatchResponseDto } from "./entities/dto/response/match-response.dto";
import { MatchCreateRequestDto } from "./entities/dto/request/match-create-request.dto";
import { Meeting } from "../meeting/entities/meeting.entity";

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Match)
    private matchRepository: Repository<Match>,

    private dataSource: DataSource,
  ) {}
  /**
   * 경기 모임 리스트롤 조회합니다.
   *
   * @returns {Promise<MatchResponseDto>}
   */
  async findMatchesByClubId(clubId: number): Promise<MatchResponseDto[]> {
    const matches = await this.matchRepository.find({
      where: { meeting: { club: { id: clubId } } },
      relations: {
        meeting: {
          meeting_court_bridges: { court: true },
        },
        games: {
          meeting_game_court_option: true,
          teams: {
            players: {
              player_user_bridges: {
                user: true,
              },
            },
          },
        },
      },
    });
    const result = matches.map((match) => new MatchResponseDto(match));
    return result;
  }

  /**
   * 경기 상세 정보를 조회합니다.
   *
   * @returns {Promise<MatchResponseDto>}
   */
  async findMatchDetail(id: number): Promise<MatchResponseDto> {
    const match = await this.matchRepository.findOne({
      where: { id },
      relations: {
        meeting: true,
        games: {
          meeting_game_court_option: true,
          teams: {
            players: {
              player_user_bridges: {
                user: true,
              },
            },
          },
        },
      },
    });
    const result = new MatchResponseDto(match);
    return result;
  }

  /**
   * 경기 모임을 생성합니다
   *
   * @returns {Promise<LessonCreateRequestDto>}
   */
  async createMatch(requestDto: MatchCreateRequestDto): Promise<Match> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const { meeting_id } = requestDto;
      const meeting = await queryRunner.manager.findOne(Meeting, {
        where: { id: meeting_id },
      });

      const match = requestDto.toEntity(meeting);

      const savedMatch = await queryRunner.manager.save(Match, match);
      await queryRunner.commitTransaction();
      return savedMatch;
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw e;
    } finally {
      await queryRunner.release();
    }
  }
}
