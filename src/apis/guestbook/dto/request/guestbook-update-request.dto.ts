import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Guestbook } from "../../entities/guestbook.entity";

export class GuestbookUpdateRequestDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  description: string;

  toEntity(): Guestbook {
    return Guestbook.create(this.title, this.content, this.description);
  }
}
