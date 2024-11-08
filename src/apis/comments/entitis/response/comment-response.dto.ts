import { UserResponseDto } from "src/apis/users/entities/response/user-response.dto";
import { Comment } from "../comment.entity";

export class CommentResponseDto {
  id: number;
  content: string;
  user: UserResponseDto;
  created_at: Date;
  updated_at: Date;

  constructor(comment: Comment) {
    this.id = comment.id;
    this.content = comment.content;
    this.user = comment.user ? new UserResponseDto(comment.user) : null;
    this.created_at = comment.created_at;
    this.updated_at = comment.updated_at;
  }
}
