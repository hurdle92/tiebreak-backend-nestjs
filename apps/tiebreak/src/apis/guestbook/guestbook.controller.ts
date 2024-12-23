import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
  ParseIntPipe,
} from "@nestjs/common";
import { GuestbookService } from "./guestbook.service";
import { Response } from "express";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { GuestbookMessage } from "./entities/guestbook.message";
import { GuestbookCreateRequestDto } from "./dto/request/guestbook-create-request.dto";
import { Guestbook } from "./entities/guestbook.entity";
import { GuestbookUpdateRequestDto } from "./dto/request/guestbook-update-request.dto";

@Controller("guestbook")
@ApiTags("방명록 API")
export class GuestbookController {
  constructor(private readonly guestbookService: GuestbookService) {}

  @Get()
  @ApiOperation({ summary: "모든 방명록 조회" })
  @ApiOkResponse({ description: "모든 방명록을 조회합니다." })
  async findAll(@Res() res: Response) {
    const guestbooks = await this.guestbookService.findAll();

    return res.status(HttpStatus.OK).json({
      code: 200,
      message: GuestbookMessage.GET_LIST,
      data: guestbooks,
    });
  }

  @Post()
  @ApiOperation({ summary: "방명록 생성" })
  @ApiOkResponse({ description: "방명록을 생성합니다." })
  async create(
    @Body() requestDto: GuestbookCreateRequestDto,
    @Res() res: Response,
  ) {
    const guestbook = await this.guestbookService.create(requestDto);

    return res.status(HttpStatus.OK).json({
      code: 200,
      message: GuestbookMessage.CREATED,
      data: guestbook,
    });
  }

  @Put(":id")
  @ApiOperation({ summary: "방명록 수정" })
  @ApiOkResponse({
    description: "id가 일치하는 방명록을 수정합니다.",
    type: Guestbook,
  })
  async update(
    @Param("id", new ParseIntPipe()) id: number,
    @Body() requestDto: GuestbookUpdateRequestDto,
    @Res() res: Response,
  ) {
    const updatedGuestbook = await this.guestbookService.update(id, requestDto);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: GuestbookMessage.CREATED,
      data: updatedGuestbook,
    });
  }

  @Delete(":id")
  @ApiOperation({ summary: "방명록 삭제" })
  @ApiOkResponse({
    description: "id가 일치하는 방명록을 삭제합니다.",
    type: Guestbook,
  })
  async delete(
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response,
  ) {
    await this.guestbookService.delete(id);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: GuestbookMessage.DELETED,
    });
  }
}
