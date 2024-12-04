import { ApiProperty } from "@nestjs/swagger";
import { Player } from "../../player.entity";
import { IsArray, IsNumber } from "class-validator";
import { Type } from "class-transformer";
import { Team } from "../../../../team/entities/team.entity";

export class PlayerCreateRequestDto {
  @IsNumber()
  @ApiProperty({ description: "유저 id" })
  user_id: number;

  @IsNumber()
  @ApiProperty({ description: "팀 id" })
  team_id: number;

  toEntity(team: Team): Player {
    return Player.create(team);
  }
}
