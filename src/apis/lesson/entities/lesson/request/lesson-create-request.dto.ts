import { IsNumber, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Lesson } from "../lesson.entity";
import { Court } from "../../../../courts/entities/court.entity";
import { User } from "../../../../users/entities/user.entity";

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

  toEntity(user: User, court: Court): Lesson {
    return Lesson.create(
      this.good_comment,
      this.bad_comment,
      this.coach_comment,
      user,
      court,
    );
  }
}
