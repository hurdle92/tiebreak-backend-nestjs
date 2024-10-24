import { ApiProperty } from "@nestjs/swagger";
import { Guestbook } from "../../entities/guestbook.entity";

export class GuestbookResponseDto {
  @ApiProperty({ description: "방명록 ID" })
  id: number;

  @ApiProperty({ description: "방명록 제목" })
  title: string;

  @ApiProperty({ description: "방명록 내용" })
  content: string;

  constructor(id: number, title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
  }

  static of(guestbook: Guestbook): GuestbookResponseDto {
    return new GuestbookResponseDto(
      guestbook.id,
      guestbook.title,
      guestbook.content,
    );
  }
}
