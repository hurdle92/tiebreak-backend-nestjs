import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Res,
  HttpStatus,
  UseGuards,
} from "@nestjs/common";
import {
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
import { MeetingService } from "../meeting/meeting.service";

@Controller("clubs")
@ApiTags("클럽 API")
export class ClubController {
  constructor(
    private readonly clubService: ClubService,
    private readonly meetingService: MeetingService,
  ) {}

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
}
