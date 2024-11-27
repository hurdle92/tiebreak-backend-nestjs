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
  Req,
} from "@nestjs/common";
import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { MatchService } from "./match.service";
import { JwtAccessAuthGuard } from "../../configs/guards/jwt-access.guard";
import { Match } from "./entities/match.entity";
import { Response } from "express";
import { MatchMessage } from "./entities/match.message";
import { UserPayload } from "../../configs/guards/types/user-payload.type";

@Controller("matches")
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get()
  @UseGuards(JwtAccessAuthGuard)
  @ApiOperation({ summary: "클럽의 경기 모임 리스트 조회" })
  @ApiParam({ name: "clubId", description: "클럽 ID" })
  @ApiResponse({
    status: 200,
    description: "클럽의 미팅 목록 조회 성공",
    type: [Match],
  })
  async findClubMatches(@Req() req, @Res() res: Response) {
    const user: UserPayload = req.user;
    const club_id = user.club_id;
    const matches = await this.matchService.findMatchesByClubId(club_id);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: MatchMessage.GET_MATCHES_LIST,
      data: matches,
    });
  }
}
