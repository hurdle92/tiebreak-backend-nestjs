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

  @CreateDateColumn({
    type: "timestamp with time zone",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at: Date;

  @UpdateDateColumn({
    type: "timestamp with time zone",
    default: () => "CURRENT_TIMESTAMP",
    nullable: true,
  })
  updated_at: Date;

  static create(title: string, content: string, description: string) {
    const lesson = new Lesson();
    return lesson;
  }
}
