import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Comment } from "./entitis/comment.entity";
import { Repository } from "typeorm";
import { User } from "../users/entities/user.entity";
import { Post } from "../posts/entities/post.entity";
import { CommentCreateRequestDto } from "./entitis/request/comment-create-request.dto";

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  /**
   * 방명록을 생성한다.
   *
   * @returns {Promise<CommentCreateRequestDto>}
   */
  async create(requestDto: CommentCreateRequestDto): Promise<Comment> {
    const user = await this.userRepository.findOne({
      where: { id: requestDto.userId },
    });
    const post = await this.postRepository.findOne({
      where: { id: requestDto.postId },
    });

    if (!user || !post) {
      throw new Error("User or Post not found");
    }

    const comment = Comment.create(requestDto.content, post, user);

    return await this.commentRepository.save(comment);
  }
}
