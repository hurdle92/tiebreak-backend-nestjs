import { Module } from "@nestjs/common";
import { LessonService } from "./lesson.service";
import { LessonController } from "./lesson.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Lesson } from "./entities/lesson/lesson.entity";
import { User } from "../users/entities/user.entity";
import { Court } from "../courts/entities/court.entity";
import { LessonCoreOption } from "./entities/lesson_core/lesson-core-option.entity";
import { LessonCoreBridge } from "./entities/lesson_core/lesson-core-bridge.entity";
import { LessonTimeOption } from "./entities/lesson_time/lesson-time-option.entity";
import { LessonTimeBridge } from "./entities/lesson_time/lesson-time-bridge.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Lesson,
      User,
      Court,
      LessonCoreOption,
      LessonCoreBridge,
      LessonTimeOption,
      LessonTimeBridge,
    ]),
  ],
  controllers: [LessonController],
  providers: [LessonService],
})
export class LessonModule {}
