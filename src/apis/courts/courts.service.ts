import { Injectable } from "@nestjs/common";
import { CourtResponseDto } from "./dto/response/court-response.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Courts } from "./entities/court.entity";
import { Repository } from "typeorm";

@Injectable()
export class CourtsService {
  constructor(
    @InjectRepository(Courts)
    private courtRepository: Repository<Courts>,
  ) {}
  /**
   * 코트 id에 해당하는 유저 정보를 조회한다.
   *
   * @param {number} id - 코트 id
   * @returns {Promise<CourtResponseDto>}
   */
  async findOne(id: number): Promise<CourtResponseDto> {
    const court = await this.courtRepository.findOne({ where: { id } });
    return new CourtResponseDto(court);
  }
}
