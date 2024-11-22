import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DiaryOptionType } from "./diary-option-type.enum";

@Entity("diaryOptions")
export class DiaryOption {
  @PrimaryGeneratedColumn({ type: "int8" })
  @ApiProperty({ description: "다이어리 생성 옵션 id" })
  id: number;

  @Column({ type: "text" })
  label: string;

  @Column({ type: "text" })
  value: string;

  @Column({
    type: "enum",
    enum: DiaryOptionType,
    default: DiaryOptionType.MATCH,
  })
  type: DiaryOptionType;

  @Column({ type: "text" })
  img: string;

  @Column({ type: "int", default: 0, nullable: true })
  priority: number;

  @CreateDateColumn()
  created_at: Date;
}
