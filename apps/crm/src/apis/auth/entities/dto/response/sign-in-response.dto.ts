import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class SignInResponseDto {
  @IsString()
  @ApiProperty({ description: "액세스 토큰" })
  access_token: string;

  @IsString()
  @ApiProperty({ description: "리프레시 토큰" })
  refresh_token: string;
}
