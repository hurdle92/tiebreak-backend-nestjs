import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Match } from "./entities/match.entity";
import { Repository } from "typeorm";
import { match } from "assert";

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Match)
    private matchRepository: Repository<Match>,
  ) {}
  /**
   * 클럽 id를 통해 정규 모임 리스트를 조회합니다.
   *
   * @returns {Promise<MeetingResponseDto>}
   */
  async findMeetingsByClubId(clubId: number): Promise<MeetingResponseDto[]> {
    const meetings = await this.matchRepository.find({
      where: { club: { id: clubId } },
      relations: ["meeting_court_bridges.court"],
    });
    const result = meetings.map((meeting) => new MeetingResponseDto(meeting));
    return result;
  }
}
