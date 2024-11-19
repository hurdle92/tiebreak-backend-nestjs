import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Court } from "../../../courts/entities/court.entity";
import { User } from "../../../users/entities/user.entity";
import { LessonCoreOption } from "../lesson_core/lesson-core-option.entity";
import { LessonTimeOption } from "../lesson_time/lesson-time-option.entity";

@Entity("lesson")
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { default: "" })
  good_comment: string;

  @Column("text", { default: "" })
  bad_comment: string;

  @Column("text", { default: "" })
  coach_comment: string;

  @ManyToOne(() => User, (user) => user.lessons)
  @JoinColumn({ name: "user" })
  user: User;

  @ManyToOne(() => Court, (court) => court.lessons)
  @JoinColumn({ name: "court" })
  court: Court;

  @OneToMany(
    () => LessonCoreOption,
    (lessonCoreOption) => lessonCoreOption.lesson,
  )
  lesson_core_options: LessonCoreOption[];

  @OneToMany(
    () => LessonTimeOption,
    (lessonTimeOption) => lessonTimeOption.lesson,
  )
  lesson_time_options: LessonTimeOption[];

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

  // NOTE : lesson entity 생성
  static create(
    good_comment: string,
    bad_comment: string,
    coach_comment: string,
    user: User,
    court: Court,
  ) {
    const lesson = new Lesson();
    lesson.good_comment = good_comment;
    lesson.bad_comment = bad_comment;
    lesson.coach_comment = coach_comment;
    lesson.user = user;
    lesson.court = court;
    return lesson;
  }
}