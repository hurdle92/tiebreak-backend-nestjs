import { DiaryOptionType } from "../diary-option-type.enum";
import { DiaryOption } from "../diary-option.entity";

export class DiaryOptionResponseDto {
  id: number;
  label: string;
  value: string;
  type: DiaryOptionType;
  img: string;
  priority: number;
  created_at: Date;

  constructor(diaryOption: DiaryOption) {
    this.id = diaryOption.id;
    this.label = diaryOption.label;
    this.value = diaryOption.value;
    this.type = diaryOption.type;
    this.img = diaryOption.img;
    this.priority = diaryOption.priority;
    this.created_at = diaryOption.created_at;
  }
}
