import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Club } from "./entities/club.entity";
import { Repository } from "typeorm";
import { ClubResponseDto } from "./entities/dto/club.response.dto";
import { ClubCreateRequestDto } from "./entities/dto/club-create-request.dto";

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(Club)
    private clubRepository: Repository<Club>,
  ) {}

  /**
   *
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

  /**
   * 클럽생성 api
   * 가입과 동시에 asscess_toekn 전달
   * @returns {Promise<ClubResponseDto>}
   */
  async createClub(requestDto: ClubCreateRequestDto): Promise<Club> {
    const clubEntity = requestDto.toEntity();
    const result = await this.clubRepository.save(clubEntity);
    return result;
  }
}
