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

  // @Post()
  // @ApiOperation({ summary: "과제 폼 제출" })
  // @ApiResponse({
  //   status: 200,
  //   description: "과제 등록 폼 제출",
  // })
  // async createMemo(
  //   @Body() requestDto: MemoCreateRequestDto,
  //   @Res() res: Response,
  // ) {
  //   await this.memoService.createMemo(requestDto);
  //   return res.status(HttpStatus.OK).json({
  //     code: 200,
  //     message: MemoMessage.CREATED,
  //   });
  // }
}
