import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Region {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  thumbnail: string;

  @Column({ type: "int" })
  order: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
