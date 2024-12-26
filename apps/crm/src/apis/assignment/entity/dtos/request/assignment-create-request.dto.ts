import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsEmail,
  Matches,
} from "class-validator";

/**
 * 과제 폼 제출 api
 * 이메일만 전달받아 이메일 도메인 검증
 *
 * @returns {Promise<AssignmentRegionResponseDto>}
 */

export class AssignmentCreateRequestDto {
  @IsEmail()
  @Matches(/@lulumedic\.com$/, {
    message: "이메일은 lulumedic.com 도메인만 허용됩니다.",
  })
  email: string;
}
