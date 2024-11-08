import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/apis/users/entities/user.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("posts")
export class Post {
  @PrimaryGeneratedColumn({ type: "int8" })
  @ApiProperty({ description: "게시글 id" })
  id: number;

  @Column({ type: "text", default: " " })
  title: string;

  @Column({ type: "text", default: " " })
  content: string;

  @Column({ type: "bool", default: true })
  isUse: boolean;

  @Column({ type: "text", default: " " })
  image: string;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: "user" })
  user: User;

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
