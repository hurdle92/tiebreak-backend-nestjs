import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { DiaryOptionType } from "./diary-option-type.enum";

@Entity()
export class DiaryOption {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: "다이어리 컨디션 id" })
  id: number;

  @Column({ type: "text" })
  @ApiProperty({ description: "다이어리 컨디션 라벨" })
  label: string;

  @Column({ type: "text" })
  value: string;

  @Column({
    type: "enum",
    enum: DiaryOptionType,
    default: DiaryOptionType.MATCH,
  })
  type: DiaryOptionType;

  @Column({ type: "text" })
  img: string;

  @Column({ type: "int" })
  priority: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
