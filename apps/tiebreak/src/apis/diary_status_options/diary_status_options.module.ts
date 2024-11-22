import { Module } from "@nestjs/common";
import { DiaryStatusOptionsService } from "./diary_status_options.service";
import { DiaryStatusOptionsController } from "./diary_status_options.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DiaryStatusOption } from "./entities/diary-status-option.entity";

@Module({
  imports: [TypeOrmModule.forFeature([DiaryStatusOption])],
  controllers: [DiaryStatusOptionsController],
  providers: [DiaryStatusOptionsService],
})
export class DiaryStatusOptionsModule {}
