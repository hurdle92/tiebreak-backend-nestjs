import { ApiProperty } from "@nestjs/swagger";
import { BannerCategory } from "../../entities/banner-category";
import { Banner } from "../../entities/banner.entity";

export class BannerResponseDto {
  @ApiProperty({ description: "배너 ID" })
  id: number;

  @ApiProperty({ description: "배너 제목" })
  title: string;

  @ApiProperty({ description: "배너 내용" })
  content: string;

  @ApiProperty({ description: "배너 썸네일" })
  thumbnail: string;

  @ApiProperty({ description: "배너 순서" })
  order: number;

  @ApiProperty({ description: "배너 외부 링크" })
  link: string;

  @ApiProperty({ description: "배너 코트 id" })
  courtId: string;

  @ApiProperty({ description: "배너 카테고리" })
  category: BannerCategory;

  @ApiProperty({ description: "배너 생성일시" })
  createdAt: Date;

  @ApiProperty({ description: "배너 수정일시" })
  updatedAt: Date;

  constructor(banner: Banner) {
    this.id = banner.id;
    this.title = banner.title;
    this.content = banner.content;
    this.thumbnail = banner.thumbnail;
    this.order = banner.order;
    this.link = banner.link;
    this.courtId = banner.courtId;
    this.category = banner.category;
    this.createdAt = banner.createdAt;
    this.updatedAt = banner.updatedAt;
  }
}
