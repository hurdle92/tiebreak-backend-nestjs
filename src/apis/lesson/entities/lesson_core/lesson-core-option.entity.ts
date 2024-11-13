import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

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
}
