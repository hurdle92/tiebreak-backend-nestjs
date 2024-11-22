import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("regions")
export class Region {
  @PrimaryGeneratedColumn({ type: "int8" })
  @ApiProperty({ description: "지역 id" })
  id: number;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  thumbnail: string;

  @Column({ type: "int", default: 0 })
  order: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
