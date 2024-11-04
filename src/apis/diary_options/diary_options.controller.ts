import { Controller } from '@nestjs/common';
import { DiaryOptionsService } from './diary_options.service';

@Controller('diary-options')
export class DiaryOptionsController {
  constructor(private readonly diaryOptionsService: DiaryOptionsService) {}
}
