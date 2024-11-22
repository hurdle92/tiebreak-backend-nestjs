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
import { LessonCoreBridge } from "./lesson-core-bridge.entity";

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

  @Column("int", { default: 0 })
  order: number;

  @OneToMany(
    () => LessonCoreBridge,
    (lessonCoreBridge) => lessonCoreBridge.lesson_core_option,
  )
  lesson_core_bridges: LessonCoreBridge[];

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
