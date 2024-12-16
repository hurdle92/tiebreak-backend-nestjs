import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Match } from "./entities/match.entity";
import { DataSource, Repository } from "typeorm";
import { MatchResponseDto } from "./entities/dto/response/match-response.dto";
import { MatchCreateRequestDto } from "./entities/dto/request/match-create-request.dto";
import { Meeting } from "../meeting/entities/meeting.entity";
import { GameService } from "../game/game.service";
import { Game } from "../game/entities/game.entity";

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Match)
    private matchRepository: Repository<Match>,
    private readonly gameService: GameService,
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
      order: { id: "ASC" },
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
    return this.dataSource.transaction(async (manager) => {
      const meeting = await manager.findOneOrFail(Meeting, {
        where: { id: requestDto.meeting_id },
      });

      const match = await manager.save(Match, requestDto.toEntity(meeting));

      const games = requestDto.games.map((gameDto) => gameDto.toEntity(match));
      await manager.save(Game, games);

      return match;
    });
  }
}
