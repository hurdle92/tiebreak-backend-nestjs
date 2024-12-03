import { GameResponseDto } from "../../../game/entities/dto/response/game-response.dto";
import { Game } from "../../../game/entities/game.entity";
import { PlayerResponseDto } from "../../../player/entities/dto/response/player-response.dto";
import { Player } from "../../../player/entities/player.entity";
import { Team } from "../team.entity";

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
