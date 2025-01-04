import { IsString, Matches, ValidateIf } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Match } from "../../../../../configs/decorators/match.decorator";
import { User } from "../../../../user/entity/user.entity";

export class SignUpRequestDto {
  @IsString()
  @ApiProperty({ description: "유저 ID" })
  user_id: string;

  @IsString()
  @ApiProperty({ description: "유저 패스워드" })
  password: string;

  @IsString()
  @ApiProperty({ description: "유저 패스워드 확인" })
  @Match("password")
  password_confirm: string;

  toEntity(hashPassword): User {
    const user = new User();
    user.user_id = this.user_id;
    user.password = hashPassword;
    return user;
  }
}
