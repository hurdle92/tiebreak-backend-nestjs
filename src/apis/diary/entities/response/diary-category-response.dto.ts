import { DiaryCategory } from "../../entities/diary-category.entity";

export class DiaryCategoryResponseDto {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  value: string;
  path: string;
  order: number;
  created_at: Date;
  updated_at: Date;

  constructor(diaryCategory: DiaryCategory) {
    this.id = diaryCategory.id;
    this.title = diaryCategory.title;
    this.description = diaryCategory.description;
    this.thumbnail = diaryCategory.thumbnail;
    this.value = diaryCategory.value;
    this.path = diaryCategory.path;
    this.order = diaryCategory.order;
    this.created_at = diaryCategory.created_at;
    this.updated_at = diaryCategory.updated_at;
  }
}
