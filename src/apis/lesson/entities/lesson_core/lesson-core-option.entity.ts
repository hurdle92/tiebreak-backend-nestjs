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

@Entity("lesson_core_option")
export class LessonCoreOption {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: "레슨 중점적으로 받은 코어 옵션" })
  id: number;

  @Column("text")
  @ApiProperty({ description: "포핸드, 백핸드" })
  label: string;

  @Column("text")
  @ApiProperty({ description: "forehand, backhand" })
  value: string;

  @Column("text", { default: "" })
  thumbnail: string;

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
