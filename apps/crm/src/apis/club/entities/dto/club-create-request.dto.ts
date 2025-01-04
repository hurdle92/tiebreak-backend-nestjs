import { IsString, IsNotEmpty, IsOptional, IsUrl } from "class-validator";
import { Club } from "../club.entity";

export class ClubCreateRequestDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  @IsUrl()
  thumbnail: string;

  @IsString()
  @IsOptional()
  description: string;

  toEntity(): Club {
    const club = new Club();
    club.name = this.name;
    club.thumbnail = this.thumbnail;
    club.description = this.description;
    return club;
  }
}
