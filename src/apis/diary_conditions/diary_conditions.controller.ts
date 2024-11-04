import { Controller } from '@nestjs/common';
import { DiaryConditionsService } from './diary_conditions.service';

@Controller('diary-conditions')
export class DiaryConditionsController {
  constructor(private readonly diaryConditionsService: DiaryConditionsService) {}
}
