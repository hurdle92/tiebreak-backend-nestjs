import { IsString, IsOptional, IsNumber, IsBoolean } from "class-validator";
import { Post } from "../../post.entity";
import { User } from "../../../../users/entities/user.entity";

export class PostCreateRequestDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsBoolean()
  isUse: boolean;

  @IsString()
  @IsOptional()
  image: string;

  @IsNumber()
  userId: number;

  toEntity(user: User): Post {
    return Post.create(this.title, this.content, this.isUse, user, this.image);
  }
}
