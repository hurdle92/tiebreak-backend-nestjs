import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { LessonTimeBridge } from "./lesson-time-bridge.entity";

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

  @OneToMany(
    () => LessonTimeBridge,
    (lessonTimeBridge) => lessonTimeBridge.lesson_time_option,
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
}
