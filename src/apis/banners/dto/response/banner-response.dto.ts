import { BannerType } from "../../entities/banner-type.enum";
import { Banner } from "../../entities/banner.entity";

export class BannerResponseDto {
  id: number;
  title: string;
  thumbnail: string;
  order: number;
  courtId: string;
  type: BannerType;
  magazineLink: string;
  created_at: Date;

  constructor(banner: Banner) {
    this.id = banner.id;
    this.title = banner.title;
    this.thumbnail = banner.thumbnail;
    this.order = banner.order;
    this.courtId = banner.courtId;
    this.type = banner.type;
    this.magazineLink = banner.magazineLink;
    this.created_at = banner.created_at;
  }
}
