import { Controller, Get, Res, HttpStatus } from "@nestjs/common";
import { TopicsService } from "./topics.service";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { Response } from "express";
import { TopicMessage } from "./topics.message";

@Controller("topics")
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}

  @Get()
  @ApiOperation({ summary: "모든 토픽 조회" })
  @ApiOkResponse({
    description: "모든 토픽을 조회합니다.",
  })
  async findAll(@Res() res: Response) {
    const topics = await this.topicsService.findAll();
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: TopicMessage.LIST,
      data: topics,
    });
  }
}
