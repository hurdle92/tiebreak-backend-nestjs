import { Courts } from "../../courts/entities/court.entity";
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
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  title: string;

  @Column({ type: "int" })
  order: number;

  @OneToMany(() => Courts, (court) => court.topic)
  courts: Courts[];

  @CreateDateColumn()
  created_at: Date;
}
