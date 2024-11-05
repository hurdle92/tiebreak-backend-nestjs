import { Diary } from "../../diary/entities/diary.entity";
import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class DiaryCondition {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: "다이어리 컨디션 id" })
  id: number;

  @Column({ type: "text" })
  @ApiProperty({ description: "다이어리 컨디션 라벨" })
  label: string;

  @Column({ type: "text" })
  value: string;

  @Column({ type: "text" })
  img: string;

  @Column({ type: "int" })
  priority: number;

  @OneToOne(() => Diary, (diary) => diary.diaryCondition)
  diary: Diary;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
