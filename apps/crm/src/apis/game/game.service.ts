import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Match } from "../match/entities/match.entity";
import { Game } from "./entities/game.entity";
import { Repository } from "typeorm";
import { GameCreateRequestDto } from "./entities/dto/request/game-create-request.dto";

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
  ) {}

  /**
   * 경기 모임을 생성합니다
   *
   * @returns {Promise<LessonCreateRequestDto>}
   */
  async createGame(
    requestDto: GameCreateRequestDto,
    match: Match,
  ): Promise<Game> {
    try {
      const game = requestDto.toEntity(match);
      const savedGame = await this.gameRepository.save(game);
      return savedGame;
    } catch (e) {
      console.log(e);
    }
  }
}
