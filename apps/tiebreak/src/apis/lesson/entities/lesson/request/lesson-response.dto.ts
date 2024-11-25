import { CourtResponseDto } from "../../../../courts/dto/response/court-response.dto";
import { UserResponseDto } from "../../../../users/entities/response/user-response.dto";
import { LessonCoreOption } from "../../lesson_core/lesson-core-option.entity";
import { LessonTimeOption } from "../../lesson_time/lesson-time-option.entity";
import { Lesson } from "../lesson.entity";

export class LessonResponseDto {
  id: number;
  icon_thumbnail: string;
  lesson_illustration: string;
  good_comment: string;
  bad_comment: string;
  coach_comment: string;
  court?: CourtResponseDto;
  user: UserResponseDto;
  lesson_core_options: LessonCoreOption[];
  lesson_time_options: LessonTimeOption[];
  lesson_date: Date;
  created_at: Date;
  updated_at: Date;

  constructor(lesson: Lesson) {
    this.id = lesson.id;
    this.icon_thumbnail = lesson.icon_thumbnail;
    this.lesson_illustration = lesson.lesson_illustration;
    this.good_comment = lesson.good_comment;
    this.bad_comment = lesson.bad_comment;
    this.coach_comment = lesson.coach_comment;
    this.court = lesson.court ? new CourtResponseDto(lesson.court) : null;
    this.user = lesson.user ? new UserResponseDto(lesson.user) : null;
    this.lesson_core_options = lesson.lesson_core_bridges.map(
      (bridge) => bridge.lesson_core_option,
    );
    this.lesson_time_options = lesson.lesson_time_bridges.map(
      (bridge) => bridge.lesson_time_option,
    );
    this.lesson_date = lesson.lesson_date;
    this.created_at = lesson.created_at;
    this.updated_at = lesson.updated_at;
  }
}
