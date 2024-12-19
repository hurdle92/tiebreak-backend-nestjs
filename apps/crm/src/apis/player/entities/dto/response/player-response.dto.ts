import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../../../user/entity/user.entity";
import { Player } from "../../player.entity";

export class PlayerResponseDto {
  id: number;

  @ApiProperty({ description: "플레이어가 속한 유저" })
  user: User;

  is_guest: boolean;
  guest_name: string;
  created_at: Date;
  updated_at: Date;

  constructor(player: Player) {
    this.id = player.id;
    this.user = player.player_user_bridges.map((bridge) => bridge.user)[0];
    this.is_guest = player.is_guest;
    this.guest_name = player.guest_name;
    this.created_at = player.created_at;
    this.updated_at = player.updated_at;
  }
}
