import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Court } from "../../courts/entities/court.entity";
import { User } from "../../users/entities/user.entity";

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

  @OneToOne(() => Court)
  @JoinColumn()
  court: Court;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

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
    court: Court,
    user: User,
  ) {
    const lesson = new Lesson();
    lesson.good_comment = good_comment;
    lesson.bad_comment = bad_comment;
    lesson.coach_comment = coach_comment;
    lesson.court = court;
    lesson.user = user;
    return lesson;
  }
}
