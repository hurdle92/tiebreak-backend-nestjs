import { IsBoolean, IsInt, IsOptional } from "class-validator";
import { GameResult } from "../../game-result.entity";

export class GameResultCreateRequestDto {
  @IsInt()
  game_id: number;

  @IsInt()
  @IsOptional()
  win_team_id: number;

  @IsInt()
  @IsOptional()
  lose_team_id: number;

  @IsInt()
  @IsOptional()
  match_result_id: number;

  @IsBoolean()
  is_draw: boolean;

  toEntity(game, win_team, lose_team): GameResult {
    const gameResult = new GameResult();
    gameResult.game = game;
    gameResult.win_team = win_team;
    gameResult.lose_team = lose_team;
    gameResult.is_draw = this.is_draw;
    return gameResult;
  }
}
