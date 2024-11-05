import { Module } from "@nestjs/common";
import { DiaryOptionsService } from "./diary_options.service";
import { DiaryOptionsController } from "./diary_options.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DiaryOption } from "./entities/diary_option.entity";

@Module({
  imports: [TypeOrmModule.forFeature([DiaryOption])],
  controllers: [DiaryOptionsController],
  providers: [DiaryOptionsService],
})
export class DiaryOptionsModule {}
