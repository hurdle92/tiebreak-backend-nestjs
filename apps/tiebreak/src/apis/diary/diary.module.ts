import { Module } from "@nestjs/common";
import { DiaryService } from "./diary.service";
import { DiaryController } from "./diary.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Diary } from "./entities/diary.entity";
import { DiaryCategory } from "./entities/diary-category.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Diary, DiaryCategory])],
  controllers: [DiaryController],
  providers: [DiaryService],
})
export class DiaryModule {}
