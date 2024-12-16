import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { Team } from "../../team.entity";
import { Type } from "class-transformer";
import { PlayerCreateRequestDto } from "../../../../player/entities/dto/request/player-create-request.dto";

export class TeamCreateRequestDto {
  @ApiProperty({
    type: PlayerCreateRequestDto,
    isArray: true,
  })
  @ValidateNested({ each: true })
  @Type(() => PlayerCreateRequestDto)
  players: PlayerCreateRequestDto[];

  toEntity(game): Team {
    const team = new Team();
    team.game = game;
    return team;
  }
}
