import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UserFindByIdDto {
  @IsString()
  @ApiProperty({ description: "유저 ID" })
  user_id: string;
}
