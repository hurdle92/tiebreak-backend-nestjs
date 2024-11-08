import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Res,
  HttpStatus,
} from "@nestjs/common";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { Response } from "express";
import { PostsService } from "./posts.service";
import { PostMessage } from "./entities/post.message";

@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get(":id")
  @ApiOperation({ summary: "게시글 정보 상세 조회" })
  @ApiOkResponse({
    description: "id가 일치하는 게시글 정보를 조회합니다.",
  })
  async findOne(
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response,
  ) {
    const post = await this.postsService.findOne(id);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: PostMessage.DETAIL,
      data: post,
    });
  }
}
