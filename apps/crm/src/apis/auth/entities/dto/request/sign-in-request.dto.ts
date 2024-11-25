import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class SignInRequestDto {
  @IsString()
  @ApiProperty({ description: "유저 ID" })
  user_id: string;

  @IsString()
  @ApiProperty({ description: "유저 패스워드" })
  password: string;
}
