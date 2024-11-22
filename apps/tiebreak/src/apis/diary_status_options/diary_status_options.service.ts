import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DiaryStatusOption } from "./entities/diary-status-option.entity";
import { DiaryStatusOptionResponseDto } from "./entities/dto/response/diary-status-option-response.dto";

@Injectable()
export class DiaryStatusOptionsService {
  constructor(
    @InjectRepository(DiaryStatusOption)
    private diaryStatusOptionRepository: Repository<DiaryStatusOption>,
  ) {}

  /**
   * 다이어리 상태 옵션 리스트를 조회합니다.
   *
   * @returns {Promise<DiaryStatusOptionResponseDto[]>}
   */
  async findAll() {
    const diaryStatusOptions = await this.diaryStatusOptionRepository.find();
    const result = diaryStatusOptions.map(
      (item) => new DiaryStatusOptionResponseDto(item),
    );
    return result;
  }
}
