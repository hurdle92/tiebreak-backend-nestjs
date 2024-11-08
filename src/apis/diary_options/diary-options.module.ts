import { Module } from "@nestjs/common";
import { DiaryOptionsService } from "./diary-options.service";
import { DiaryOptionsController } from "./diary-options.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DiaryOption } from "./entities/diary-option.entity";

@Module({
  imports: [TypeOrmModule.forFeature([DiaryOption])],
  controllers: [DiaryOptionsController],
  providers: [DiaryOptionsService],
})
export class DiaryOptionsModule {}
