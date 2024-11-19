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
import { LessonCoreOption } from "./lesson-core-option.entity";

@Entity("lesson_core_bridge")
export class LessonCoreBridge {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  lesson_id: number;

  @PrimaryColumn()
  lesson_core_option_id: number;

  @ManyToOne(() => Lesson, (lesson) => lesson.lesson_core_bridges)
  @JoinColumn({ name: "lesson_id", referencedColumnName: "id" })
  lesson: Lesson;

  @ManyToOne(
    () => LessonCoreOption,
    (lessonCoreOption) => lessonCoreOption.lesson_core_bridges,
  )
  @JoinColumn({ name: "lesson_core_option_id", referencedColumnName: "id" })
  lesson_core_option: LessonCoreOption;

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
