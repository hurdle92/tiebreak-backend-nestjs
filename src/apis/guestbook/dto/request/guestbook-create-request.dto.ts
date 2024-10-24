import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Guestbook } from "../../entities/guestbook.entity";

export class GuestbookCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: "제목" })
  title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: "내용" })
  content: string;

  toEntity(): Guestbook {
    return Guestbook.create(this.title, this.content);
  }
}
