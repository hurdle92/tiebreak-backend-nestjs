import { Injectable } from "@nestjs/common";
import { CreateCourtDto } from "./dto/create-court.dto";
import { UpdateCourtDto } from "./dto/update-court.dto";
import { CourtResponseDto } from "./dto/response/court-response.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Court } from "./entities/court.entity";
import { Repository } from "typeorm";

@Injectable()
export class CourtsService {
  constructor(
    @InjectRepository(Court)
    private courtRepository: Repository<Court>,
  ) {}
  create(createCourtDto: CreateCourtDto) {
    return "This action adds a new court";
  }

  findAll() {
    return "This action returns all courts";
  }
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

  update(id: number, updateCourtDto: UpdateCourtDto) {
    return `This action updates a #${id} court`;
  }

  remove(id: number) {
    return `This action removes a #${id} court`;
  }
}
