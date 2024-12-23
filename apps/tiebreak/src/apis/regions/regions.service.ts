import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Region } from "./entities/region.entity";
import { RegionResponseDto } from "./dto/response/region-response.dto";

@Injectable()
export class RegionsService {
  constructor(
    @InjectRepository(Region)
    private regionRepository: Repository<Region>,
  ) {}

  /**
   * 모든 행정구역 정보를 조회합니다.
   *
   * @returns {Promise<RegionResponseDto[]>}
   */
  async findAll() {
    const regions = await this.regionRepository.find();
    const result = regions.map((item) => new RegionResponseDto(item));
    return result;
  }
}
