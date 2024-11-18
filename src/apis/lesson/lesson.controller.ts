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
import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from "@nestjs/swagger";
import { Response } from "express";
import { LessonService } from "./lesson.service";
import { LessonMessage } from "./entities/lesson/lesson.message";
import { LessonResponseDto } from "./entities/lesson/request/lesson-response.dto";
import { LessonCreateRequestDto } from "./entities/lesson/request/lesson-create-request.dto";

@Controller("lesson")
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Get(":id")
  @ApiOperation({ summary: "레슨 상세 조회" })
  @ApiParam({ name: "id", description: "레슨 ID" })
  @ApiResponse({ status: 200, description: "레슨 상세 정보 조회 성공" })
  async findOne(
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response,
  ) {
    const lesson = await this.lessonService.findOne(id);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: LessonMessage.GET_DETAIL,
      data: lesson,
    });
  }

  @Post()
  @ApiOperation({ summary: "레슨 생성" })
  @ApiOkResponse({ description: "레슨을 생성합니다." })
  async create(
    @Body() requestDto: LessonCreateRequestDto,
    @Res() res: Response,
  ) {
    const lesson = await this.lessonService.create(requestDto);

    return res.status(HttpStatus.OK).json({
      code: 200,
      message: LessonMessage.CREATED,
      data: lesson,
    });
  }
}
