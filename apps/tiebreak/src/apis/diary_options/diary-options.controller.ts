import { DiaryOptionsService } from "./diary-options.service";
import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { DiaryOptionMessage } from "./entities/diary-option.message";

@Controller("diary-options")
export class DiaryOptionsController {
  constructor(private readonly diaryOptionsService: DiaryOptionsService) {}

  @Get()
  @ApiOperation({ summary: "다이어리 생성 옵션 리스트 조회" })
  @ApiOkResponse({
    description: "다이어리 생성 옵션 리스트를 조회합니다.",
  })
  async findAll(@Res() res: Response) {
    const diaryOptions = await this.diaryOptionsService.findAll();
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: DiaryOptionMessage.GET_LIST,
      data: diaryOptions,
    });
  }
}
