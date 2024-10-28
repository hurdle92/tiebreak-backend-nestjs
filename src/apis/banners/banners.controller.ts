import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { BannersService } from "./banners.service";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { BannerMessage } from "./entities/banners.message";

@Controller("banners")
@ApiTags("배너 API")
export class BannersController {
  constructor(private readonly bannersService: BannersService) {}

  @Get()
  @ApiOperation({ summary: "배너 리스트 조회" })
  @ApiOkResponse({
    description: "배너 리스트를 조회합니다.",
  })
  async findAll(@Res() res: Response) {
    const banners = await this.bannersService.findAll();
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: BannerMessage.GET_LIST,
      data: banners,
    });
  }
}
