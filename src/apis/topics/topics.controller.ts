import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from "@nestjs/common";
import { TopicsService } from "./topics.service";
import { CreateTopicDto } from "./dto/create-topic.dto";
import { UpdateTopicDto } from "./dto/update-topic.dto";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { Response } from "express";
import { TopicMessage } from "./topics.message";

@Controller("topics")
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}

  @Post()
  create(@Body() createTopicDto: CreateTopicDto) {
    return this.topicsService.create(createTopicDto);
  }

  @Get()
  @ApiOperation({ summary: "모든 토픽 조회" })
  @ApiOkResponse({
    description: "모든 토픽을 조회한다.",
  })
  async findAll(@Res() res: Response) {
    const topics = await this.topicsService.findAll();
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: TopicMessage.LIST,
      data: topics,
    });
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.topicsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTopicDto: UpdateTopicDto) {
    return this.topicsService.update(+id, updateTopicDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.topicsService.remove(+id);
  }
}
