import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Banners } from "./entities/banner.entity";
import { Repository } from "typeorm";
import { BannerResponseDto } from "./dto/response/banner-response.dto";

@Injectable()
export class BannersService {
  constructor(
    @InjectRepository(Banners)
    private bannerRepository: Repository<Banners>,
  ) {}

  /**
   * 모든 배너 정보를 조회합니다.
   *
   * @returns {Promise<GuestbookResponseDto[]>}
   */
  async findAll() {
    const banners = await this.bannerRepository.find();
    const result = banners.map((item) => new BannerResponseDto(item));
    return result;
  }
}
