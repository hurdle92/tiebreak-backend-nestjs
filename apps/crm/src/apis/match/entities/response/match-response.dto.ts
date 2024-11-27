import { Meeting } from "../../../meeting/entities/meeting.entity";
import { Match } from "../match.entity";

export class MatchResponseDto {
  id: number;
  match_date: Date;
  meeting: Meeting;
  created_at: Date;
  updated_at: Date;

  constructor(match: Match) {
    this.id = match.id;
    this.match_date = match.match_date;
    this.meeting = match.meeting;
    this.created_at = match.created_at;
    this.updated_at = match.updated_at;
  }
}
