import { ApiProperty } from "@nestjs/swagger";
import { Guestbook } from "../../entities/guestbook.entity";

export class GuestbookResponseDto {
  @ApiProperty({ description: "방명록 ID" })
  id: number;

  @ApiProperty({ description: "방명록 제목" })
  title: string;

  @ApiProperty({ description: "방명록 내용" })
  content: string;

  @ApiProperty({ description: "생성 일시" })
  createdAt: Date;

  @ApiProperty({ description: "수정 일시" })
  updatedAt: Date;

  constructor(guestbook: Guestbook) {
    this.id = guestbook.id;
    this.title = guestbook.title;
    this.content = guestbook.content;
    this.createdAt = guestbook.createdAt;
    this.updatedAt = guestbook.updatedAt;
  }
}
