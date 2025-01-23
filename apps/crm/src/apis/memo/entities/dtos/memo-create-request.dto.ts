import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  isNotEmpty,
} from "class-validator";
import { Memo } from "../memo.entity";

export class MemoCreateRequestDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  toEntity(): Memo {
    const memo = new Memo();
    memo.title = this.title;
    memo.description = this.description;
    return memo;
  }
}
