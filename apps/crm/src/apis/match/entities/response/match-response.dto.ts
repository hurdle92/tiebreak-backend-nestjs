import { GameResponseDto } from "../../../game/entities/dto/response/game-response.dto";
import { Game } from "../../../game/entities/game.entity";
import { Meeting } from "../../../meeting/entities/meeting.entity";
import { Match } from "../match.entity";

export class MatchResponseDto {
  id: number;
  match_date: Date;
  meeting: Meeting;
  note: string;
  games: GameResponseDto[];
  created_at: Date;
  updated_at: Date;

  constructor(match: Match) {
    this.id = match.id;
    this.match_date = match.match_date;
    this.meeting = match.meeting;
    this.note = match.note;
    this.games = match.games.map((team) => new GameResponseDto(team));
    this.created_at = match.created_at;
    this.updated_at = match.updated_at;
  }
}
