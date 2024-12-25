import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AssignmentRegion } from "./entity/region.entity";
import { Repository } from "typeorm";
import { AssignmentRegionResponseDto } from "./entity/dtos/assignment-region.response.dto";

@Injectable()
export class AssignmentService {
  constructor(
    @InjectRepository(AssignmentRegion)
    private regionRepository: Repository<AssignmentRegion>,
  ) {}

  async findRegions(): Promise<AssignmentRegionResponseDto[]> {
    const regions = await this.regionRepository.find({ order: { id: "ASC" } });
    const result = regions.map((item) => new AssignmentRegionResponseDto(item));
    return result;
  }
}
