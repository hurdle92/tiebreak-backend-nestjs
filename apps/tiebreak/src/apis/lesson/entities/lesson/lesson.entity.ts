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
import { LESSON_ICON_DEFAULT_THUMBNAIL } from "../../../../configs/constants/links";

@Entity("lesson")
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", {
    default: LESSON_ICON_DEFAULT_THUMBNAIL,
  })
  icon_thumbnail: string;

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
    { cascade: true },
  )
  lesson_core_bridges: LessonCoreBridge[];

  @OneToMany(
    () => LessonTimeBridge,
    (lessonTimeBridge) => lessonTimeBridge.lesson,
    { cascade: true },
  )
  lesson_time_bridges: LessonTimeBridge[];

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  lesson_date: Date;

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
    lesson_date: Date,
  ) {
    const lesson = new Lesson();
    lesson.icon_thumbnail = LESSON_ICON_DEFAULT_THUMBNAIL;
    lesson.good_comment = good_comment;
    lesson.bad_comment = bad_comment;
    lesson.coach_comment = coach_comment;
    lesson.user = user;
    lesson.court = court;
    lesson.lesson_date = lesson_date;
    return lesson;
  }
}
