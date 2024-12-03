import { Match } from "../../../../match/entities/match.entity";
import { GameType } from "../../game-type.enum";
import { Game } from "../../game.entity";
import { TeamResponseDto } from "../../../../team/entities/dto/team-response.dto";

export class GameResponseDto {
  id: number;
  match: Match;
  note: string;
  game_type: GameType;
  teams: TeamResponseDto[];
  created_at: Date;
  updated_at: Date;

  constructor(game: Game) {
    this.id = game.id;
    this.match = game.match;
    this.note = game.note;
    this.game_type = game.game_type;
    this.teams = game.teams.map((team) => new TeamResponseDto(team));
    this.created_at = game.created_at;
    this.updated_at = game.updated_at;
  }
}
