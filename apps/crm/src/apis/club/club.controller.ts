import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Res,
  HttpStatus,
  Post,
  Body,
  Query,
  Delete,
  UseGuards,
} from "@nestjs/common";
import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Response } from "express";
import { ClubService } from "./club.service";
import { Club } from "./entities/club.entity";
import { ClubMessage } from "./entities/club.message";
import { JwtAccessAuthGuard } from "../../configs/guards/jwt-access.guard";
import { Meeting } from "../meeting/entities/meeting.entity";

@Controller("clubs")
export class ClubController {
  constructor(private readonly clubService: ClubService) {}

  @Get("/:id")
  @UseGuards(JwtAccessAuthGuard)
  @ApiOperation({ summary: "클럽 상세 조회" })
  @ApiParam({ name: "id", description: "클럽 ID" })
  @ApiResponse({
    status: 200,
    description: "레슨 상세 정보 조회 성공",
    type: Club,
  })
  async findOne(
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response,
  ) {
    const club = await this.clubService.findOne(id);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: ClubMessage.GET_DETAIL,
      data: club,
    });
  }

  @Get("/clubs/:clubId/meetings")
  @UseGuards(JwtAccessAuthGuard)
  @ApiOperation({ summary: "클럽의 정규 모임 리스트 조회" })
  @ApiParam({ name: "clubId", description: "클럽 ID" })
  @ApiResponse({
    status: 200,
    description: "클럽의 미팅 목록 조회 성공",
    type: [Meeting],
  })
  async findClubMeetings(
    @Param("club_id", new ParseIntPipe()) clubId: number,
    @Res() res: Response,
  ) {
    const meetings = await this.clubService.findClubMeetings(clubId);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: ClubMessage.GET_MEETINGS_LIST,
      data: meetings,
    });
  }
}
