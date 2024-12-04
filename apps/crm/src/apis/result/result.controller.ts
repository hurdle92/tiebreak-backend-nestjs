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
import { JwtAccessAuthGuard } from "../../configs/guards/jwt-access.guard";
import { Response } from "express";
import { UserPayload } from "../../configs/guards/types/user-payload.type";
import { ResultService } from "./result.service";
import { GameResult } from "./entities/game-result/game-result.entity";
import { GameResultMessage } from "./entities/game-result.message";

@Controller("result")
export class ResultController {
  constructor(private readonly resultService: ResultService) {}

  @Get()
  @UseGuards(JwtAccessAuthGuard)
  @ApiOperation({ summary: "클럽의 경기 모임 리스트 조회" })
  @ApiParam({ name: "clubId", description: "클럽 ID" })
  @ApiResponse({
    status: 200,
    description: "클럽의 미팅 목록 조회 성공",
    type: [GameResult],
  })
  async findGameResults(@Req() req, @Res() res: Response) {
    const user: UserPayload = req.user;
    const result = await this.resultService.findGameResults(1);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: GameResultMessage.GET_GAME_RESULTS_LIST,
      data: result,
    });
  }
}
