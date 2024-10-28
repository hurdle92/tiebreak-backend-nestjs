import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { BannerCategory } from "./banner-category";

@Entity()
export class Banner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  title: string;

  @Column({ type: "text" })
  content: string;

  @Column({ type: "text" })
  thumbnail: string;

  @Column({ type: "int" })
  order: number;

  @Column({ type: "text" })
  link: string;

  @Column({ type: "text" })
  courtId: string;

  @Column({
    type: "enum",
    enum: BannerCategory,
    default: BannerCategory.COURT,
  })
  category: BannerCategory;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
