import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Equal, Repository } from "typeorm";
import { User } from "../users/entities/user.entity";
import { Court } from "../courts/entities/court.entity";
import { LessonResponseDto } from "./entities/lesson/request/lesson-response.dto";
import { Lesson } from "./entities/lesson/lesson.entity";
import { LessonCreateRequestDto } from "./entities/lesson/request/lesson-create-request.dto";

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
   * @returns {Promise<LessonResponseDto>}
   */
  async findOne(id: number): Promise<LessonResponseDto> {
    const lesson = await this.lessonRepository.findOne({
      where: { id },
      relations: ["user", "court"],
    });
    return new LessonResponseDto(lesson);
  }

  /**
   * 레슨을 생성합니다.
   *
   * @returns {Promise<LessonCreateRequestDto>}
   */
  async create(requestDto: LessonCreateRequestDto): Promise<Lesson> {
    const user = await this.userRepository.findOne({
      where: { id: requestDto.user_id },
    });
    const court = await this.courtRepository.findOne({
      where: { id: Equal(requestDto.court_id) },
    });
    const lesson = requestDto.toEntity(user, court);
    return await this.lessonRepository.save(lesson);
  }
}
