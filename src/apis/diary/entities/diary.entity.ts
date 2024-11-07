import { User } from "../../users/entities/user.entity";
import { Court } from "../..//courts/entities/court.entity";
import { DiaryCondition } from "../../diary_conditions/entities/diary_condition.entity";
import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Diary {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: "다이어리 id" })
  id: number;

  @Column({ type: "text" })
  @ApiProperty({ description: "다이어리 컨디션 라벨" })
  content: string;

  @Column({ type: "text" })
  playType: string;

  @Column({ type: "text" })
  playHours: string;

  @Column({ type: "text" })
  playGamesCount: string;

  @Column({ type: "date" })
  playDate: Date;

  @ManyToOne(() => User, (user) => user.daries)
  user: User;

  @Column({ type: "int" })
  playDateYear: number;

  @Column({ type: "int" })
  playDateMonth: number;

  @Column({ type: "bool" })
  isUse: boolean;

  @OneToOne(() => Court)
  @JoinColumn()
  court: Court;

  @OneToOne(() => DiaryCondition)
  @JoinColumn()
  diaryCondition: DiaryCondition;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
