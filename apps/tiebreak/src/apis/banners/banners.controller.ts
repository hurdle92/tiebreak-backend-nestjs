import { Controller, Get, HttpStatus, Post, Res, Body } from "@nestjs/common";
import { BannersService } from "./banners.service";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { BannerMessage } from "./entities/banner.message";
import { BannerCreateRequestDto } from "./dto/request/banner-create-request.dto";

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

  @Post()
  @ApiOperation({ summary: "배너 생성" })
  @ApiOkResponse({ description: "배너를 생성합니다." })
  async create(
    @Body() requestDto: BannerCreateRequestDto,
    @Res() res: Response,
  ) {
    const banner = await this.bannersService.create(requestDto);

    return res.status(HttpStatus.OK).json({
      code: 200,
      message: BannerMessage.CREATED,
      data: banner,
    });
  }
}
