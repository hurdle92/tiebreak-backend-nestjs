import { IsNotEmpty, IsString, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Comment } from "../comment.entity";
import { Post } from "src/apis/posts/entities/post.entity";
import { User } from "src/apis/users/entities/user.entity";

export class CommentCreateRequestDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: "댓글 내용" })
  content: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: "게시글 ID" })
  postId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: "사용자 ID" })
  userId: number;
}
