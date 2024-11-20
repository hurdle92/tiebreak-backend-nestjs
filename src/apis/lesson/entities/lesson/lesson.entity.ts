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
import { LessonCoreBridge } from "../lesson_core/lesson-core-bridge.entity";
import { LessonTimeBridge } from "../lesson_time/lesson-time-bridge.entity";

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
    () => LessonCoreBridge,
    (lessonCoreBridge) => lessonCoreBridge.lesson,
  )
  lesson_core_bridges: LessonCoreBridge[];

  @OneToMany(
    () => LessonTimeBridge,
    (lessonTimeBridge) => lessonTimeBridge.lesson,
  )
  lesson_time_bridges: LessonTimeBridge[];

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
