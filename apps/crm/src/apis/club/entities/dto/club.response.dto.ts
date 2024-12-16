import { Meeting } from "../../../meeting/entities/meeting.entity";
import { User } from "../../../user/entity/user.entity";
import { Club } from "../club.entity";

export class ClubResponseDto {
  id: number;
  name: string;
  thumbnail: string;
  users: User[];
  meetings: Meeting[];
  club_created_at: Date;
  created_at: Date;
  updated_at: Date;

  constructor(club: Club) {
    this.id = club.id;
    this.name = club.name;
    this.thumbnail = club.thumbnail;
    this.users = club.users;
    this.meetings = club.meetings;
    this.club_created_at = club.club_created_at;
    this.created_at = club.created_at;
    this.updated_at = club.updated_at;
  }
}
