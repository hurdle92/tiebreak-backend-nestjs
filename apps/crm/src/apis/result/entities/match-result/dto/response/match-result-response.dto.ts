import { MatchResult } from "../../match-result.entity";
import { GameResultResponseDto } from "../../../game-result/dto/game-result-response.dto";
import { Match } from "../../../../../match/entities/match.entity";

export class MatchResultResponseDto {
  id: number;
  match: Match;
  game_results: GameResultResponseDto[];
  note: string;
  created_at: Date;
  updated_at: Date;

  constructor(matchResult: MatchResult) {
    this.id = matchResult.id;
    this.match = matchResult.match;
    this.game_results = matchResult.game_results.map(
      (gameResult) => new GameResultResponseDto(gameResult),
    );
    this.note = matchResult.note;
    this.created_at = matchResult.created_at;
    this.updated_at = matchResult.updated_at;
  }
}
