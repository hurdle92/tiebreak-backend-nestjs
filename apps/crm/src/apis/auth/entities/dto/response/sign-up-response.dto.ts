import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { UserResponseDto } from "apps/crm/src/apis/user/entity/response/user-response.dto";

export class SignUpResponseDto {
  user: UserResponseDto;

  @IsString()
  @ApiProperty({ description: "액세스 토큰" })
  access_token: string;
}
