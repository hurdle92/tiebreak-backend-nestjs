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

  static create(title: string, content: string, description: string) {
    const lesson = new Lesson();
    return lesson;
  }
}
