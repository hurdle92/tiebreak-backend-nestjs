import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

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
