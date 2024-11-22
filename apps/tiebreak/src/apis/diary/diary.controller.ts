import { DiaryService } from "./diary.service";
import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { Response } from "express";
import { DiaryCategoryMessage } from "./entities/diary-category.message";

@Controller("diary")
export class DiaryController {
  constructor(private readonly diaryService: DiaryService) {}

  @Get("categories")
  @ApiOperation({ summary: "다이어리 생성시 카테고리 리스트 조회." })
  @ApiOkResponse({
    description: "다이어리 카테고리 리스트를 조회합니다.",
  })
  async getCategories(@Res() res: Response) {
    const categories = await this.diaryService.findAllCategories();
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: DiaryCategoryMessage.GET_LIST,
      data: categories,
    });
  }
}
