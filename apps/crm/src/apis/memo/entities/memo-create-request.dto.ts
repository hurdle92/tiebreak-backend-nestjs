import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  isNotEmpty,
} from "class-validator";
import { Memo } from "./memo.entity";

export class MemoCreateRequestDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  toEntity(): Memo {
    const memo = new Memo();
    memo.title = this.title;
    memo.content = this.content;
    return memo;
  }
}
