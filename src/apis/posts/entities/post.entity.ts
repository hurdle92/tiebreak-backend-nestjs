import { ApiProperty } from "@nestjs/swagger";
import { Comment } from "../../../apis/comments/entitis/comment.entity";
import { User } from "../../../apis/users/entities/user.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
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

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

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

  static create(
    title: string,
    content: string,
    isUse: boolean = true,
    user: User,
    image: string = " ",
  ): Post {
    const post = new Post();
    post.title = title;
    post.content = content;
    post.isUse = isUse;
    post.user = user;
    post.image = image;
    return post;
  }
}
