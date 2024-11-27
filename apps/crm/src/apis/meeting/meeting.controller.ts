import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Res,
  HttpStatus,
  UseGuards,
  Req,
} from "@nestjs/common";
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Response } from "express";
import { MeetingService } from "./meeting.service";
import { JwtAccessAuthGuard } from "../../configs/guards/jwt-access.guard";
import { Meeting } from "./entities/meeting.entity";
import { UserPayload } from "../../configs/guards/types/user-payload.type";
import { MeetingMessage } from "./entities/meeting.message";

@Controller("meetings")
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}

  @Get()
  @UseGuards(JwtAccessAuthGuard)
  @ApiOperation({ summary: "클럽의 정규 모임 리스트 조회" })
  @ApiParam({ name: "clubId", description: "클럽 ID" })
  @ApiResponse({
    status: 200,
    description: "클럽의 미팅 목록 조회 성공",
    type: [Meeting],
  })
  async findClubMeetings(@Req() req, @Res() res: Response) {
    const user: UserPayload = req.user;
    const club_id = user.club_id;
    const meetings = await this.meetingService.findMeetingsByClubId(club_id);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: MeetingMessage.GET_MEETINGS_LIST,
      data: meetings,
    });
  }
}
