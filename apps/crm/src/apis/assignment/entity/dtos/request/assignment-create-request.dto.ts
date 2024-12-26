import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  ValidateNested,
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
    message: "이메일은 lulumedic.com 도메인이어야 합니다.",
  })
  email: string;
}
