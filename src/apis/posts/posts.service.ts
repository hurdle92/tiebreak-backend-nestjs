import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Post } from "./entities/post.entity";
import { Repository } from "typeorm";
import { PostResponseDto } from "./entities/dto/response/post-response.dto";

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}
  /**
   * 게시글 id에 해당하는 게시글 정보를 조회합니다.
   *
   * @param {number} id - 게시글 id
   * @returns {Promise<UserResponseDto>}
   */
  async findOne(id: number): Promise<PostResponseDto> {
    const post = await this.postRepository.findOne({
      where: { id },
      relations: ["user", "comments", "comments.user"],
    });
    return new PostResponseDto(post);
  }
}
