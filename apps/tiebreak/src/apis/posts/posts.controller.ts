import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Res,
  HttpStatus,
  Post,
  Body,
} from "@nestjs/common";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { Response } from "express";
import { PostsService } from "./posts.service";
import { PostMessage } from "./entities/post.message";
import { PostCreateRequestDto } from "./entities/dto/request/post-create-request.dto";

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

  @Post()
  @ApiOperation({ summary: "게시글 생성" })
  @ApiOkResponse({ description: "게시글을 생성합니다." })
  async create(@Body() requestDto: PostCreateRequestDto, @Res() res: Response) {
    const post = await this.postsService.create(requestDto);

    return res.status(HttpStatus.OK).json({
      code: 200,
      message: PostMessage.CREATED,
      data: post,
    });
  }
}
