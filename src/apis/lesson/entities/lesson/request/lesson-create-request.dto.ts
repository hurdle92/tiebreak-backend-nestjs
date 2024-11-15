import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Lesson } from "../lesson.entity";
import { Court } from "../../../../courts/entities/court.entity";
import { User } from "../../../../users/entities/user.entity";

export class LessonCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: "좋은 점 코멘트" })
  good_comment: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: "나쁜 점 코멘트" })
  bad_comment: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: "코치 코멘트" })
  coach_comment: string;

  @IsNotEmpty()
  @ApiProperty({ description: "코트 정보" })
  court: Court;

  @IsNotEmpty()
  @ApiProperty({ description: "유저 정보" })
  user: User;

  toEntity(court: Court, user: User): Lesson {
    return Lesson.create(
      this.good_comment,
      this.bad_comment,
      this.coach_comment,
      court,
      user,
    );
  }
}
