import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../users/entities/user.entity";
import { Court } from "../courts/entities/court.entity";
import { LessonResponseDto } from "./entities/lesson/request/lesson-response.dto";
import { Lesson } from "./entities/lesson/lesson.entity";

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Court)
    private courtRepository: Repository<Court>,
  ) {}
  /**
   * 레슨 id에 해당하는 레슨 상세 정보를 조회합니다.
   *
   * @param {number} id - 레슨 id
   * @returns {Promise<UserResponseDto>}
   */
  async findOne(id: number): Promise<LessonResponseDto> {
    const lesson = await this.lessonRepository.findOne({
      where: { id },
      relations: ["user", "court"],
    });
    return new LessonResponseDto(lesson);
  }
}
