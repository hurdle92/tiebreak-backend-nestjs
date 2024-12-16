import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { Match } from "../../match.entity";
import { GameCreateRequestDto } from "../../../../game/entities/dto/request/game-create-request.dto";

export class MatchCreateRequestDto {
  @IsNumber()
  @ApiProperty({ description: "정규모임 id" })
  meeting_id: number;

  @IsDateString()
  @ApiProperty({ description: "매치 날짜" })
  match_date: Date;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: "노트" })
  note: string;

  @ApiProperty({
    type: GameCreateRequestDto,
    isArray: true,
  })
  @ValidateNested({ each: true })
  @Type(() => GameCreateRequestDto)
  games: GameCreateRequestDto[];

  toEntity(meeting): Match {
    const match = new Match();
    match.meeting = meeting;
    match.match_date = this.match_date;
    match.note = this.note;
    return match;
  }
}
