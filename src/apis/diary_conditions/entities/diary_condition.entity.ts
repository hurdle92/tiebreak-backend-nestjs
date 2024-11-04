import { ApiProperty } from "@nestjs/swagger";
import { Post } from "../../posts/entities/post.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class DiaryCondition {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: "다이어리 컨디션 id" })
  id: number;

  @Column({ type: "text" })
  @ApiProperty({ description: "다이어리 컨디션 라벨" })
  label: string;

  @Column({ type: "text" })
  value: string;

  @Column({ type: "text" })
  img: string;

  @Column({ type: "int" })
  priority: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
