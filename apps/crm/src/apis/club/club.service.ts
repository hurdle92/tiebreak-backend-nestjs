import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Club } from "./entities/club.entity";
import { Repository } from "typeorm";
import { ClubResponseDto } from "./entities/dto/club.response.dto";

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(Club)
    private clubRepository: Repository<Club>,
  ) {}

  /**
   * 레슨 id에 해당하는 레슨 상세 정보를 조회합니다.
   *
   * @param {number} id - 레슨 id
   * @returns {Promise<ClubResponseDto>}
   */
  async findOne(id: number): Promise<ClubResponseDto> {
    const club = await this.clubRepository.findOne({
      where: { id },
      relations: ["users", "meetings"],
    });
    return new ClubResponseDto(club);
  }
}
