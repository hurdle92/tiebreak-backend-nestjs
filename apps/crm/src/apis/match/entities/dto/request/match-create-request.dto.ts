import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";
import { Match } from "../../match.entity";

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

  toEntity(meeting): Match {
    const match = new Match();
    match.meeting = meeting;
    match.match_date = this.match_date;
    match.note = this.note;
    return match;
  }
}
