import { Team } from "../../../../team/entities/team.entity";
import { Game } from "../../../../game/entities/game.entity";
import { GameResult } from "../game-result.entity";

export class GameResultResponseDto {
  id: number;
  game: Game;
  win_team: Team;
  lose_team: Team;
  is_draw: boolean;
  created_at: Date;
  updated_at: Date;

  constructor(gameResult: GameResult) {
    this.id = gameResult.id;
    this.game = gameResult.game;
    this.win_team = gameResult.win_team;
    this.lose_team = gameResult.lose_team;
    this.is_draw = gameResult.is_draw;
    this.created_at = gameResult.created_at;
    this.updated_at = gameResult.updated_at;
  }
}
