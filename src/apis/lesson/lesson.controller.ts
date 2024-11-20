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
  ApiTags,
} from "@nestjs/swagger";
import { Response } from "express";
import { LessonService } from "./lesson.service";
import { LessonMessage } from "./entities/lesson/lesson.message";
import { LessonCreateRequestDto } from "./entities/lesson/request/lesson-create-request.dto";

@Controller("lesson")
@ApiTags("레슨 API")
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Get("time-options")
  @ApiOperation({ summary: "레슨 시간 옵션 조회" })
  @ApiResponse({ status: 200, description: "레슨 시간 옵션 조회 성공" })
  async getLessonTimeOptions(@Res() res: Response) {
    const lessonTimeOptions = await this.lessonService.findLessonTimeOptions();
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: "레슨 시간 옵션 조회 성공",
      data: lessonTimeOptions,
    });
  }

  @Get("core-options")
  @ApiOperation({ summary: "레슨 코어 옵션 조회" })
  @ApiResponse({ status: 200, description: "레슨 코어 옵션 조회 성공" })
  async getLessonCoreOptions(@Res() res: Response) {
    const lessonCoreOptions = await this.lessonService.findLessonCoreOptions();
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: "레슨 코어 옵션 조회 성공",
      data: lessonCoreOptions,
    });
  }

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
