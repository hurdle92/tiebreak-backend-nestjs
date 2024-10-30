import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class UpdateConfig {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean", default: false })
  isNeedUpdate: boolean;

  @Column({ type: "text" })
  currentVersion: string;

  @Column({ type: "text" })
  minReuqiredUpdateVersion: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
