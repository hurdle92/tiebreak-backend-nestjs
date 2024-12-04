import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GameResult } from "./entities/game-result/game-result.entity";
import { Repository } from "typeorm";
import { GameResultResponseDto } from "./entities/game-result/dto/game-result-response.dto";

@Injectable()
export class ResultService {
  constructor(
    @InjectRepository(GameResult)
    private gameResultRepository: Repository<GameResult>,
  ) {}
  /**
   * 모든 게임 결과를 조회합니다
   *
   * @returns {Promise<GameResultResponseDto>}
   */
  async findGameResults(matchId: number): Promise<GameResultResponseDto[]> {
    const gameResults = await this.gameResultRepository.find();
    const result = gameResults.map(
      (result) => new GameResultResponseDto(result),
    );
    return result;
  }
}
