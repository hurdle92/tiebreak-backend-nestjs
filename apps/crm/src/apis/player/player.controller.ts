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
import { PlayerService } from "./player.service";
import { PlayerCreateRequestDto } from "./entities/dto/request/player-create-request.dto";
import { PlayerMessage } from "./entities/player.message";

@Controller("players")
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  @ApiOperation({ summary: "플레이어 생성" })
  @ApiOkResponse({ description: "플레이어을 생성합니다." })
  async create(
    @Body() requestDto: PlayerCreateRequestDto,
    @Res() res: Response,
  ) {
    const player = await this.playerService.create(requestDto);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: PlayerMessage.CREATE_PLAYER,
      data: player,
    });
  }
}
