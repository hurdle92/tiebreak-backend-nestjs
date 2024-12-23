import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("diaryStatusOptions")
export class DiaryStatusOption {
  @PrimaryGeneratedColumn({ type: "int8" })
  @ApiProperty({ description: "다이어리 상태 옵션 id" })
  id: number;

  @Column({ type: "text" })
  label: string;

  @Column({ type: "text" })
  value: string;

  @Column({ type: "text" })
  img: string;

  @Column({ type: "int2" })
  priority: number;

  @CreateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at: Date;
}
