import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Res,
  HttpStatus,
  UseGuards,
  Req,
  Post,
  Body,
  Put,
  Delete,
} from "@nestjs/common";
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Response } from "express";
import { MemoService } from "./memo.service";
import { MemoCreateRequestDto } from "./entities/memo-create-request.dto";
import { MemoMessage } from "./entities/memo.message";
import { MemoUpdateRequestDto } from "./entities/dtos/memo-update-request.dto";

@Controller("memos")
export class MemoController {
  constructor(private readonly memoService: MemoService) {}

  @Get()
  async findMemos(@Req() req, @Res() res: Response) {
    const result = await this.memoService.findMemos();
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: MemoMessage.GET_MEMOS,
      data: result,
    });
  }

  @Get(":id")
  async findMemoById(
    @Req() req,
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response,
  ) {
    const result = await this.memoService.findMemoById(id);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: MemoMessage.GET_MEMO_DETAIL,
      data: result,
    });
  }

  @Put(":id")
  async update(
    @Param("id", new ParseIntPipe()) id: number,
    @Body() requestDto: MemoUpdateRequestDto,
    @Res() res: Response,
  ) {
    const updatedMemo = await this.memoService.update(id, requestDto);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: MemoMessage.EDITED,
      data: updatedMemo,
    });
  }

  @Post()
  async createMemo(
    @Body() requestDto: MemoCreateRequestDto,
    @Res() res: Response,
  ) {
    await this.memoService.create(requestDto);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: MemoMessage.CREATED,
    });
  }

  @Delete(":id")
  async delete(
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response,
  ) {
    await this.memoService.delete(id);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: MemoMessage.DELETED,
    });
  }
}
