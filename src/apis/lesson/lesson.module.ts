import { Module } from "@nestjs/common";
import { LessonService } from "./lesson.service";
import { LessonController } from "./lesson.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Lesson } from "./entities/lesson/lesson.entity";
import { User } from "../users/entities/user.entity";
import { Court } from "../courts/entities/court.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Lesson, User, Court])],
  controllers: [LessonController],
  providers: [LessonService],
})
export class LessonModule {}
