import { ApiProperty } from "@nestjs/swagger";
import { Post } from "src/apis/posts/entities/post.entity";
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

  static create(content: string, post: Post, user: User) {
    const comment = new Comment();
    comment.content = content;
    comment.post = post;
    comment.user = user;
    return comment;
  }
}
