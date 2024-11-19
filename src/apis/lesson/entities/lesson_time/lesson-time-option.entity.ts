import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Lesson } from "../lesson/lesson.entity";

@Entity("lesson_time_option")
export class LessonTimeOption {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: "레슨 시간 옵션" })
  id: number;

  @Column("text")
  label: string;

  @Column("text")
  value: string;

  @Column("text", { default: "" })
  thumbnail: string;

  @Column("int", { default: 0 })
  order: number;

  @ManyToOne(() => Lesson, (lesson) => lesson.lesson_core_options)
  lesson: Lesson;

  @CreateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at: Date;

  @UpdateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: true,
  })
  updated_at: Date;
}
