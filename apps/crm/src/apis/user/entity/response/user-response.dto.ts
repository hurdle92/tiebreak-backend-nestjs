import { ApiProperty } from "@nestjs/swagger";
import { User } from "../user.entity";

export class UserResponseDto {
  @ApiProperty({ description: "primary id" })
  id: number;

  @ApiProperty({ description: "유저 아이디" })
  user_id: string;

  @ApiProperty({ description: "유저 이름" })
  name: string;

  @ApiProperty({ description: "NTRP 레벨" })
  ntrp: string;

  @ApiProperty({ description: "이메일 주소" })
  email: string;

  @ApiProperty({ description: "생성 일자" })
  created_at: Date;

  @ApiProperty({ description: "수정 일자" })
  updated_at: Date;

  constructor(user: User) {
    this.id = user.id;
    this.user_id = user.user_id;
    this.name = user.name;
    this.ntrp = user.ntrp;
    this.email = user.email;
    this.created_at = user.created_at;
    this.updated_at = user.updated_at;
  }
}
