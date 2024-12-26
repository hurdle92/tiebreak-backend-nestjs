import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AssignmentRegion } from "./entity/region.entity";
import { Repository } from "typeorm";
import { AssignmentRegionResponseDto } from "./entity/dtos/response/assignment-region.response.dto";
import { AssignmentCreateRequestDto } from "./entity/dtos/request/assignment-create-request.dto";

@Injectable()
export class AssignmentService {
  constructor(
    @InjectRepository(AssignmentRegion)
    private regionRepository: Repository<AssignmentRegion>,
  ) {}

  /**
   * 지역 조회 api
   *
   * @returns {Promise<AssignmentRegionResponseDto>}
   */
  async findRegions(): Promise<AssignmentRegionResponseDto[]> {
    const regions = await this.regionRepository.find({ order: { id: "ASC" } });
    const result = regions.map((item) => new AssignmentRegionResponseDto(item));
    return result;
  }

  /**
   * 폼 제출 api
   * validation은 requet dto에서 처리
   *
   * @returns {Promise<AssignmentRegionResponseDto>}
   */
  async createForm(requestDto: AssignmentCreateRequestDto) {
    return true;
  }
}
