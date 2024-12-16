import { PlayerResponseDto } from "../../../../player/entities/dto/response/player-response.dto";
import { Team } from "../../team.entity";

export class TeamResponseDto {
  id: number;
  players: PlayerResponseDto[];
  created_at: Date;
  updated_at: Date;

  constructor(team: Team) {
    this.id = team.id;
    this.players = team.players.map((player) => new PlayerResponseDto(player));
    this.created_at = team.created_at;
    this.updated_at = team.updated_at;
  }
}
