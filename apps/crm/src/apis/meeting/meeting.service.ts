import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Meeting } from "./entities/meeting.entity";
import { Repository } from "typeorm";
import { MeetingResponseDto } from "./entities/dto/response/meeting-response.dto";

@Injectable()
export class MeetingService {
  constructor(
    @InjectRepository(Meeting)
    private meetingRepository: Repository<Meeting>,
  ) {}
  /**
   * 레슨 시간 옵션을 조회합니다.
   *
   * @returns {Promise<MeetingResponseDto>}
   */
  async findMeetingsByClubId(clubId: number): Promise<MeetingResponseDto[]> {
    const meetings = await this.meetingRepository.find({
      where: { club: { id: clubId } },
    });
    const result = meetings.map((meeting) => new MeetingResponseDto(meeting));
    return result;
  }
}
