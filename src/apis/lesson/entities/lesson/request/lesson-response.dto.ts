import { CourtResponseDto } from "../../../../courts/dto/response/court-response.dto";
import { UserResponseDto } from "../../../../users/entities/response/user-response.dto";
import { Lesson } from "../lesson.entity";

export class LessonResponseDto {
  id: number;
  good_comment: string;
  bad_comment: string;
  coach_comment: string;
  court?: CourtResponseDto;
  user: UserResponseDto;
  created_at: Date;
  updated_at: Date;

  constructor(lesson: Lesson) {
    this.id = lesson.id;
    this.good_comment = lesson.good_comment;
    this.bad_comment = lesson.bad_comment;
    this.coach_comment = lesson.coach_comment;
    this.court = lesson.court ? new CourtResponseDto(lesson.court) : null;
    this.user = lesson.user ? new UserResponseDto(lesson.user) : null;
    this.created_at = lesson.created_at;
    this.updated_at = lesson.updated_at;
  }
}
