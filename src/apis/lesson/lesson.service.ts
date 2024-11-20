import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Equal, In, Repository } from "typeorm";
import { User } from "../users/entities/user.entity";
import { Court } from "../courts/entities/court.entity";
import { LessonResponseDto } from "./entities/lesson/request/lesson-response.dto";
import { Lesson } from "./entities/lesson/lesson.entity";
import { LessonCreateRequestDto } from "./entities/lesson/request/lesson-create-request.dto";
import { LessonCoreOption } from "./entities/lesson_core/lesson-core-option.entity";
import { LessonCoreBridge } from "./entities/lesson_core/lesson-core-bridge.entity";

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Court)
    private courtRepository: Repository<Court>,
    @InjectRepository(LessonCoreOption)
    private lessonCoreRepository: Repository<LessonCoreOption>,
    @InjectRepository(LessonCoreBridge)
    private lessonCoreBridgeRepository: Repository<LessonCoreOption>,
    private dataSource: DataSource,
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
      relations: [
        "user",
        "court",
        "lesson_core_bridges.lesson_core_option",
        "lesson_time_bridges.lesson_time_option",
      ],
    });
    return new LessonResponseDto(lesson);
  }

  /**
   * 레슨을 생성합니다.
   *
   * @returns {Promise<LessonCreateRequestDto>}
   */
  async create(requestDto: LessonCreateRequestDto): Promise<LessonResponseDto> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const user = await this.userRepository.findOne({
        where: { id: requestDto.user_id },
      });
      const court = await this.courtRepository.findOne({
        where: { id: Equal(requestDto.court_id) },
      });
      const lessonCoreOptions = await this.lessonCoreRepository.find({
        where: { id: In(requestDto.core_option_ids) },
      });
      const lesson = requestDto.toEntity(user, court);
      const lessonCoreBridges = lessonCoreOptions.map((option) =>
        LessonCoreBridge.create(lesson, option),
      );

      lesson.lesson_core_bridges = lessonCoreBridges;
      lesson.lesson_time_bridges = [];
      await this.lessonRepository.save(lesson);
      await this.lessonCoreBridgeRepository.save(lessonCoreBridges);
      await queryRunner.commitTransaction();
      return new LessonResponseDto(lesson);
    } catch (e) {
      await queryRunner.rollbackTransaction();
    }
  }
}
