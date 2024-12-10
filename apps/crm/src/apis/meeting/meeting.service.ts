import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Meeting } from "./entities/meeting.entity";
import { Repository } from "typeorm";
import { MeetingResponseDto } from "./entities/dto/response/meeting-response.dto";
import { MeetingGameCourtOption } from "./entities/meeting-game-court-option/meeting-game-court-option.entity";

@Injectable()
export class MeetingService {
  constructor(
    @InjectRepository(Meeting)
    private meetingRepository: Repository<Meeting>,
    @InjectRepository(MeetingGameCourtOption)
    private meetingGameCourtOptionRepository: Repository<MeetingGameCourtOption>,
  ) {}
  /**
   * 클럽 id를 통해 정규 모임 리스트를 조회합니다.
   *
   * @returns {Promise<MeetingResponseDto>}
   */
  async findMeetingsByClubId(clubId: number): Promise<MeetingResponseDto[]> {
    const meetings = await this.meetingRepository.find({
      where: { club: { id: clubId } },
      relations: {
        meeting_court_bridges: {
          court: true,
        },
      },
    });
    const result = meetings.map((meeting) => new MeetingResponseDto(meeting));
    return result;
  }

  /**
   * 정규 모임 코트 옵션 리스트를 조회합니다.
   *
   * @returns {Promise<MeetingResponseDto>}
   */
  async findMeetingGameCourtOptions(
    clubId: number,
  ): Promise<MeetingResponseDto[]> {
    const courtOptions = await this.meetingGameCourtOptionRepository.find({
      where: { meeting: { id: clubId } },
      relations: {
        meeting_court_bridges: {
          court: true,
        },
      },
    });
    const result = meetings.map((meeting) => new MeetingResponseDto(meeting));
    return result;
  }
}
