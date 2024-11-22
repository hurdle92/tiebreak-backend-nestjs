import { DiaryStatusOption } from "../../diary-status-option.entity";

export class DiaryStatusOptionResponseDto {
  id: number;
  label: string;
  value: string;
  img: string;
  priority: number;
  created_at: Date;

  constructor(diaryStatusOption: DiaryStatusOption) {
    this.id = diaryStatusOption.id;
    this.label = diaryStatusOption.label;
    this.value = diaryStatusOption.value;
    this.img = diaryStatusOption.img;
    this.priority = diaryStatusOption.priority;
    this.created_at = diaryStatusOption.created_at;
  }
}
