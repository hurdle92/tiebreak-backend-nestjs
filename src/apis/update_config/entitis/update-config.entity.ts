import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("updateConfig")
export class UpdateConfig {
  @PrimaryGeneratedColumn({ type: "int8" })
  id: number;

  @Column({ type: "boolean", default: false })
  isNeedUpdate: boolean;

  @Column({ type: "text" })
  needUpdateVersion: string;

  @Column({ type: "int" })
  expireTimeHours: number;

  @CreateDateColumn()
  created_at: Date;
}
