import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Meeting } from "./entities/meeting.entity";
import { Repository } from "typeorm";

@Injectable()
export class MeetingService {
  constructor(
    @InjectRepository(Meeting)
    private meetingRepository: Repository<Meeting>,
  ) {}
  /**
   * 레슨 시간 옵션을 조회합니다.
   *
   * @returns {Promise<LessonCreateRequestDto>}
   */
  async findMeetings(): Promise<LessonTimeOption[]> {
    const lessonTimeOptions = await this.lessonTimeRepository.find({
      order: { order: "ASC" },
    });
    return lessonTimeOptions;
  }
}
