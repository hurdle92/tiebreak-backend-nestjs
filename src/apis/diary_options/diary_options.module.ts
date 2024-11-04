import { Module } from '@nestjs/common';
import { DiaryOptionsService } from './diary_options.service';
import { DiaryOptionsController } from './diary_options.controller';

@Module({
  controllers: [DiaryOptionsController],
  providers: [DiaryOptionsService],
})
export class DiaryOptionsModule {}
