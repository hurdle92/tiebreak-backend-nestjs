import { ApiProperty } from "@nestjs/swagger";
import { Player } from "../../player.entity";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class PlayerCreateRequestDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty({ description: "유저 id" })
  user_id: number;

  @IsBoolean()
  @ApiProperty({ description: "게스트 유무" })
  is_guest: boolean;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: "게스트 이름" })
  guest_name: string;

  toEntity(team): Player {
    const player = new Player();
    player.is_guest = this.is_guest;
    player.team = team;
    player.guest_name = this.guest_name;
    return player;
  }
}
