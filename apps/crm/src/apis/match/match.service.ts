import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Match } from "./entities/match.entity";
import { DataSource, Repository } from "typeorm";
import { MatchResponseDto } from "./entities/dto/response/match-response.dto";
import { MatchCreateRequestDto } from "./entities/dto/request/match-create-request.dto";
import { Meeting } from "../meeting/entities/meeting.entity";
import { GameService } from "../game/game.service";
import { Game } from "../game/entities/game.entity";
import { Team } from "../team/entities/team.entity";
import { Player } from "../player/entities/player.entity";
import { PlayerCreateRequestDto } from "../player/entities/dto/request/player-create-request.dto";
import { PlayerService } from "../player/player.service";

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Match)
    private matchRepository: Repository<Match>,
    private readonly gameService: GameService,
    private readonly playerService: PlayerService,
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

      const { games } = requestDto;

      for (const gameDto of games) {
        const game = gameDto.toEntity(match);
        const savedGame = await manager.save(Game, game);

        if (gameDto.teams.length > 0) {
          const { teams } = gameDto;
          for (const teamDto of teams) {
            const team = teamDto.toEntity(savedGame);
            const savedTeam = await manager.save(Team, team);
            if (teamDto.players.length > 0) {
              const { players } = teamDto;
              for (const playerDto of players) {
                const playerCreateDto = new PlayerCreateRequestDto();
                playerCreateDto.team_id = savedTeam.id;
                playerCreateDto.user_id = playerDto.user_id;
                await this.playerService.create(playerCreateDto);
              }
            }
          }
        }
      }

      return match;
    });
  }
}
