import { Court } from "../../courts/entities/court.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Topics {
  @PrimaryGeneratedColumn({ type: "int8" })
  id: number;

  @Column({ type: "text" })
  title: string;

  @Column({ type: "int" })
  order: number;

  @OneToMany(() => Court, (court) => court.topic)
  courts: Court[];

  @CreateDateColumn()
  created_at: Date;
}
