import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEnum,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Banner } from "../../entities/banner.entity";
import { BannerType } from "../../entities/banner-type.enum";

export class BannerCreateRequestDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: "배너 제목" })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: "배너 썸네일" })
  thumbnail: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ description: "배너 순서" })
  order: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: "배너 연동 코트 id", required: false })
  courtId?: string;

  @IsEnum(BannerType)
  @ApiProperty({
    description: "배너 타입",
    enum: BannerType,
    default: BannerType.COURT,
  })
  type: BannerType;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: "배너 매거진 링크" })
  magazineLink: string;

  toEntity(): Banner {
    const banner = new Banner();
    banner.title = this.title;
    banner.thumbnail = this.thumbnail;
    banner.order = this.order;
    banner.courtId = this.courtId;
    banner.type = this.type;
    banner.magazineLink = this.magazineLink;
    return banner;
  }
}
