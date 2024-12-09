import { ApiProperty } from "@nestjs/swagger";
import { Player } from "../../player.entity";
import { IsBoolean, IsNumber, IsOptional } from "class-validator";

export class PlayerCreateRequestDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty({ description: "유저 id" })
  user_id: number;

  @IsNumber()
  @ApiProperty({ description: "팀 id" })
  team_id: number;

  @IsBoolean()
  @ApiProperty({ description: "게스트 유무" })
  is_guest: boolean;

  toEntity(team): Player {
    const player = new Player();
    player.is_guest = this.is_guest;
    player.team = team;
    return player;
  }
}
