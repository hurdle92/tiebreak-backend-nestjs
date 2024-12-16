import { ApiProperty } from "@nestjs/swagger";
import { User } from "../user.entity";
import { Club } from "../../../club/entities/club.entity";

export class UserResponseDto {
  @ApiProperty({ description: "primary id" })
  id: number;
  user_id: string;
  name: string;
  ntrp: string;
  email: string;
  club: Club;
  created_at: Date;
  updated_at: Date;

  constructor(user: User) {
    this.id = user.id;
    this.user_id = user.user_id;
    this.name = user.name;
    this.ntrp = user.ntrp;
    this.email = user.email;
    this.club = user.club;
    this.created_at = user.created_at;
    this.updated_at = user.updated_at;
  }
}
