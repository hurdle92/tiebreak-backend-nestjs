import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Memo } from "../memo.entity";

export class MemoUpdateRequestDto {
  @IsString()
  title: string;

  @IsString()
  description: string;
}
