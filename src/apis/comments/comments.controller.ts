import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
  ParseIntPipe,
} from "@nestjs/common";
import { Response } from "express";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { CommentsService } from "./comments.service";
import { CommentCreateRequestDto } from "./entitis/request/comment-create-request.dto";
import { CommentMessage } from "./entitis/comment.message";

@Controller("comments")
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @ApiOperation({ summary: "방명록 생성" })
  @ApiOkResponse({ description: "방명록을 생성합니다." })
  async create(
    @Body() requestDto: CommentCreateRequestDto,
    @Res() res: Response,
  ) {
    const comment = await this.commentsService.create(requestDto);
    console.log(comment);

    return res.status(HttpStatus.OK).json({
      code: 200,
      message: CommentMessage.CREATED,
      data: comment,
    });
  }
}
