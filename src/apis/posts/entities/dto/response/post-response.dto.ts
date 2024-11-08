import { UserResponseDto } from "src/apis/users/entities/response/user-response.dto";
import { Post } from "../../post.entity";
import { CommentResponseDto } from "src/apis/comments/entitis/response/comment-response.dto";

export class PostResponseDto {
  id: number;
  title: string;
  content: string;
  isUse: boolean;
  image: string;
  user: UserResponseDto;
  comments: CommentResponseDto[];
  created_at: Date;
  updated_at: Date;

  constructor(post: Post) {
    this.id = post.id;
    this.title = post.title;
    this.content = post.content;
    this.isUse = post.isUse;
    this.image = post.image;
    this.user = post.user ? new UserResponseDto(post.user) : null;
    if (post.comments && post.comments.length > 0) {
      this.comments = post.comments.map(
        (comment) => new CommentResponseDto(comment),
      );
    }
    this.created_at = post.created_at;
    this.updated_at = post.updated_at;
  }
}
