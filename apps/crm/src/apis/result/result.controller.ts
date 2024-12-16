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
import { MatchResult } from "./entities/match-result/match-result.entity";

@Controller("results")
export class ResultController {
  constructor(private readonly resultService: ResultService) {}

  @Get("games")
  @UseGuards(JwtAccessAuthGuard)
  @ApiOperation({ summary: "개별 게임 결과 리스트 조회" })
  @ApiParam({ name: "matchId", description: "match ID" })
  @ApiResponse({
    status: 200,
    description: "게임 결과 리스트 조회",
    type: [GameResult],
  })
  async findGameResults(@Req() req, @Res() res: Response) {
    const user: UserPayload = req.user;
    const result = await this.resultService.findGameResults();
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: GameResultMessage.GET_GAME_RESULTS_LIST,
      data: result,
    });
  }

  @Get("matches/:id")
  @UseGuards(JwtAccessAuthGuard)
  @ApiOperation({ summary: "정규 게임 결과 상세 조회" })
  @ApiParam({ name: "id", description: "match id" })
  @ApiResponse({
    status: 200,
    description: "정규 게임 결과 상세 조회",
    type: MatchResult,
  })
  async findMatchResult(
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response,
  ) {
    const result = await this.resultService.findMatchResultDetail(id);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: GameResultMessage.GET_MATCH_RESULT_DETAIL,
      data: result,
    });
  }
}
