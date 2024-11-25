import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Lesson } from "../lesson/lesson.entity";
import { LessonTimeOption } from "./lesson-time-option.entity";

@Entity("lesson_time_bridge")
export class LessonTimeBridge {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  lesson_id: number;

  @PrimaryColumn()
  lesson_time_option_id: number;

  @ManyToOne(() => Lesson, (lesson) => lesson.lesson_time_bridges, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "lesson_id", referencedColumnName: "id" })
  lesson: Lesson;

  @ManyToOne(
    () => LessonTimeOption,
    (lessonTimeOption) => lessonTimeOption.lesson_time_bridges,
  )
  @JoinColumn({ name: "lesson_time_option_id", referencedColumnName: "id" })
  lesson_time_option: LessonTimeOption;

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

  static create(
    lesson: Lesson,
    lessonTimeOption: LessonTimeOption,
  ): LessonTimeBridge {
    const bridge = new LessonTimeBridge();
    bridge.lesson = lesson;
    bridge.lesson_time_option = lessonTimeOption;
    return bridge;
  }
}
