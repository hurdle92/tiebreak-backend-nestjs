import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GameResult } from "./entities/game-result/game-result.entity";
import { Repository } from "typeorm";
import { GameResultResponseDto } from "./entities/game-result/dto/game-result-response.dto";
import { MatchResult } from "./entities/match-result/match-result.entity";
import { MatchResultResponseDto } from "./entities/match-result/dto/response/match-result-response.dto";

@Injectable()
export class ResultService {
  constructor(
    @InjectRepository(GameResult)
    private gameResultRepository: Repository<GameResult>,
    @InjectRepository(MatchResult)
    private matchResultRepository: Repository<MatchResult>,
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
}
