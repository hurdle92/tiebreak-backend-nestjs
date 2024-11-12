import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DiaryCategory } from "./entities/diary-category.entity";
import { Repository } from "typeorm";
import { DiaryCategoryResponseDto } from "./entities/response/diary-category-response.dto";

@Injectable()
export class DiaryService {
  constructor(
    @InjectRepository(DiaryCategory)
    private diaryCategoryRepository: Repository<DiaryCategory>,
  ) {}

  /**
   * 모든 다이어리 카테고리 정보를 조회한다.
   *
   * @returns {Promise<DiaryCategoryResponseDto[]>}
   */
  async findAllCategories(): Promise<DiaryCategoryResponseDto[]> {
    const categories = await this.diaryCategoryRepository.find();
    const result = categories.map((item) => new DiaryCategoryResponseDto(item));
    return result;
  }
}
