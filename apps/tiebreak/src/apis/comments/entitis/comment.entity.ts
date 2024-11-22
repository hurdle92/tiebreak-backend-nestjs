import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Post } from "../../posts/entities/post.entity";
import { User } from "../../users/entities/user.entity";

@Entity("comments")
export class Comment {
  @PrimaryGeneratedColumn({ type: "int8" })
  @ApiProperty({ description: "댓글 id" })
  id: number;

  @Column({ type: "text", default: " " })
  content: string;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: "user" })
  user: User;

  @ManyToOne(() => Post, (post) => post.comments)
  @JoinColumn({ name: "post" })
  post: Post;

  @CreateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at: Date;

  @UpdateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: true,
  })
  updated_at: Date;

  static create(content: string, post: Post, user: User) {
    const comment = new Comment();
    comment.content = content;
    comment.post = post;
    comment.user = user;
    return comment;
  }
}
