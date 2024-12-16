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
@ApiTags("플레이어 API")
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}
}
