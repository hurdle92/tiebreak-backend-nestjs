import { Module } from "@nestjs/common";
import { DiaryConditionsService } from "./diary_conditions.service";
import { DiaryConditionsController } from "./diary_conditions.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DiaryCondition } from "./entities/diary_condition.entity";

@Module({
  imports: [TypeOrmModule.forFeature([DiaryCondition])],
  controllers: [DiaryConditionsController],
  providers: [DiaryConditionsService],
})
export class DiaryConditionsModule {}
