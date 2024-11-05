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
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: "유저 id" })
  id: number;

  @Column({ type: "text", unique: true })
  uid: string;

  @Column({ type: "text" })
  nickname: string;

  @Column({ type: "bool" })
  isIos: boolean;

  @Column({ type: "bool" })
  isAos: boolean;

  @Column({ type: "bool" })
  isKakao: boolean;

  @Column({ type: "bool" })
  isApple: boolean;

  @Column({ type: "text" })
  kakaoId: string;

  @Column({ type: "text" })
  appleEmail: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}