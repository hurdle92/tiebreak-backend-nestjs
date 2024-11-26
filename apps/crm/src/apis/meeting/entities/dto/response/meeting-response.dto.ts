import { ApiProperty } from "@nestjs/swagger";
import { MeetingCourtBridge } from "../../meeting-court-bridge/meeting-court-bridge.entity";
import { Meeting } from "../../meeting.entity";
import { Club } from "../../../../club/entities/club.entity";

export class MeetingResponseDto {
  id: number;
  name: string;
  regular_meeting_time: string;
  club: Club;
  meeting_court_bridges: MeetingCourtBridge[];
  created_at: Date;
  updated_at: Date;

  constructor(meeting: Meeting) {
    this.id = meeting.id;
    this.name = meeting.name;
    this.regular_meeting_time = meeting.regular_meeting_time;
    this.club = meeting.club;
    this.meeting_court_bridges = meeting.meeting_court_bridges;
    this.created_at = meeting.created_at;
    this.updated_at = meeting.updated_at;
  }
}
