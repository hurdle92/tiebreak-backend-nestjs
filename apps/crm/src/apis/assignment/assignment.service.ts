import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AssignmentRegion } from "./entity/region.entity";
import { Repository } from "typeorm";

@Injectable()
export class AssignmentService {
  constructor(
    @InjectRepository(AssignmentRegion)
    private regionRepository: Repository<AssignmentRegion>,
  ) {}

  async findRegions(): Promise<AssignmentRegion[]> {
    const regions = await this.regionRepository.find();
    return regions;
  }
}
