import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GameResult } from "./entities/game-result/game-result.entity";
import { Repository } from "typeorm";
import { GameResultResponseDto } from "./entities/game-result/dto/response/game-result-response.dto";
import { MatchResult } from "./entities/match-result/match-result.entity";
import { MatchResultResponseDto } from "./entities/match-result/dto/response/match-result-response.dto";
import { GameResultCreateRequestDto } from "./entities/game-result/dto/request/game-result-create-request.dto";
import { Team } from "../team/entities/team.entity";
import { Game } from "../game/entities/game.entity";

@Injectable()
export class ResultService {
  constructor(
    @InjectRepository(GameResult)
    private gameResultRepository: Repository<GameResult>,
    @InjectRepository(MatchResult)
    private matchResultRepository: Repository<MatchResult>,
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}
  /**
   * 모든 게임 결과를 조회합니다
   *
   * @returns {Promise<GameResultResponseDto>}
   */
  async findGameResults(): Promise<GameResultResponseDto[]> {
    const gameResults = await this.gameResultRepository.find({
      relations: {
        game: true,
        win_team: { players: { player_user_bridges: { user: true } } },
        lose_team: { players: { player_user_bridges: { user: true } } },
      },
    });
    const result = gameResults.map(
      (result) => new GameResultResponseDto(result),
    );
    return result;
  }

  /**
   * 정규 게임 상세 정보를 조회합니다
   *
   * @returns {Promise<MatchResultResponseDto[]>}
   */
  async findMatchResultDetail(id: number): Promise<MatchResultResponseDto[]> {
    const matchResults = await this.matchResultRepository.find({
      where: {
        id,
      },
      relations: {
        match: true,
        game_results: true,
      },
    });
    const result = matchResults.map(
      (result) => new MatchResultResponseDto(result),
    );
    return result;
  }

  /**
   * 경기 모임을 생성합니다
   *
   * @returns {Promise<LessonCreateRequestDto>}
   */
  async createGameResult(
    requestDto: GameResultCreateRequestDto,
  ): Promise<GameResultResponseDto> {
    const { game_id, win_team_id, lose_team_id } = requestDto;
    const game = await this.gameRepository.findOne({ where: { id: game_id } });
    const win_team = await this.teamRepository.findOne({
      where: { id: win_team_id },
    });
    const lose_team = await this.teamRepository.findOne({
      where: { id: lose_team_id },
    });
    const gameResult = requestDto.toEntity(game, win_team, lose_team);
    const result = await this.gameResultRepository.save(gameResult);
    return result;
  }
}
