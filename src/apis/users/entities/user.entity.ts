import { ApiProperty } from "@nestjs/swagger";
import { Post } from "../../posts/entities/post.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Diary } from "src/apis/diary/entities/diary.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn({ type: "int8" })
  @ApiProperty({ description: "유저 id" })
  id: number;

  @Column({ type: "text", default: " ", nullable: true })
  uid: string;

  @Column({ type: "text", default: " ", nullable: true })
  nickname: string;

  @Column({ type: "bool", default: false, nullable: true })
  isIos: boolean;

  @Column({ type: "bool", default: false, nullable: true })
  isAos: boolean;

  @Column({ type: "bool", default: false, nullable: true })
  isKakao: boolean;

  @Column({ type: "bool", default: false, nullable: true })
  isApple: boolean;

  @Column({ type: "text", default: " ", nullable: true })
  kakaoId: string;

  @Column({ type: "text", default: " ", nullable: true })
  appleEmail: string;

  // @OneToMany(() => Post, (post) => post.user)
  // posts: Post[];

  // @OneToMany(() => Diary, (diary) => diary.user)
  // daries: Diary[];

  @CreateDateColumn({
    type: "timestamp with time zone",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at: Date;

  @UpdateDateColumn({
    type: "timestamp with time zone",
    default: () => "CURRENT_TIMESTAMP",
    nullable: true,
  })
  updated_at: Date;
}
