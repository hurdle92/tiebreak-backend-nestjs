import {
  IsArray,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Lesson } from "../lesson.entity";
import { Court } from "../../../../courts/entities/court.entity";
import { User } from "../../../../users/entities/user.entity";
import { Type } from "class-transformer";

export class LessonCreateRequestDto {
  @IsString()
  @ApiProperty({ description: "좋은 점 코멘트" })
  good_comment: string;

  @IsString()
  @ApiProperty({ description: "나쁜 점 코멘트" })
  bad_comment: string;

  @IsString()
  @ApiProperty({ description: "코치 코멘트" })
  coach_comment: string;

  @IsNumber()
  @ApiProperty({ description: "유저 ID" })
  user_id: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ description: "코트 ID" })
  court_id: number;

  @IsArray()
  @IsNumber({}, { each: true })
  @Type(() => Number)
  @ApiProperty({ description: "레슨 코어 옵션 ID 리스트", type: [Number] })
  lesson_core_option_ids: number[];

  @IsDateString()
  @ApiProperty({ description: "레슨 날짜", example: "2024-11-11T10:00:00Z" })
  lesson_date: string;

  @IsArray()
  @IsNumber({}, { each: true })
  @Type(() => Number)
  @ApiProperty({ description: "레슨 타임 옵션 ID 리스트", type: [Number] })
  lesson_time_option_ids: number[];

  toEntity(user: User, court: Court): Lesson {
    return Lesson.create(
      this.good_comment,
      this.bad_comment,
      this.coach_comment,
      user,
      court,
      new Date(this.lesson_date),
    );
  }
}
