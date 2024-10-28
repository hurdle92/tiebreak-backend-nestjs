import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Res,
  HttpStatus,
} from "@nestjs/common";
import { CourtsService } from "./courts.service";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { CourtMessage } from "./courts.message";

@Controller("courts")
@ApiTags("코트 API")
export class CourtsController {
  constructor(private readonly courtsService: CourtsService) {}

  @Get(":id")
  @ApiOperation({ summary: "코트 정보 상세 조회" })
  @ApiOkResponse({
    description: "id가 일치하는 코트 정보를 조회합니다.",
  })
  async findOne(
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response,
  ) {
    const court = await this.courtsService.findOne(id);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: CourtMessage.DETAIL,
      data: court,
    });
  }
}
