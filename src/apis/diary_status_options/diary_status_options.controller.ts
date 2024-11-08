import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { DiaryStatusOptionsService } from "./diary_status_options.service";
import { DiaryStatusOptionMessage } from "./entities/diary-status-option.message";

@Controller("diary-status-options")
export class DiaryStatusOptionsController {
  constructor(
    private readonly diaryStatusOptionsService: DiaryStatusOptionsService,
  ) {}

  @Get()
  @ApiOperation({ summary: "다이어리 상태 옵션 리스트 조회" })
  @ApiOkResponse({
    description: "다이어리 상태 옵션 리스트를 조회합니다.",
  })
  async findAll(@Res() res: Response) {
    const diaryStatusOptions = await this.diaryStatusOptionsService.findAll();
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: DiaryStatusOptionMessage.GET_LIST,
      data: diaryStatusOptions,
    });
  }
}
