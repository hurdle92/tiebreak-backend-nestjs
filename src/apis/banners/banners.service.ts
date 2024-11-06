import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Banners } from "./entities/banner.entity";
import { Repository } from "typeorm";
import { BannerResponseDto } from "./dto/response/banner-response.dto";
import { BannerCreateRequestDto } from "./dto/request/banner-create-request.dto";

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

  /**
   * 방명록을 생성한다.
   *
   * @returns {Promise<BannerCreateRequestDto>}
   */
  async create(requestDto: BannerCreateRequestDto): Promise<Banners> {
    return await this.bannerRepository.save(requestDto.toEntity());
  }
}
