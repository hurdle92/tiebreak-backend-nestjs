import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DiaryOption } from "./entities/diary-option.entity";
import { DiaryOptionResponseDto } from "./entities/response/diary-option-response.dto";

@Injectable()
export class DiaryOptionsService {
  constructor(
    @InjectRepository(DiaryOption)
    private diaryOptionRepository: Repository<DiaryOption>,
  ) {}

  /**
   * 모든 행정구역 정보를 조회합니다.
   *
   * @returns {Promise<DiaryOptionResponseDto[]>}
   */
  async findAll() {
    const diaryOptions = await this.diaryOptionRepository.find();
    const result = diaryOptions.map((item) => new DiaryOptionResponseDto(item));
    return result;
  }
}
