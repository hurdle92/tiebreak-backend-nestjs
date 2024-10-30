import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { RegionsService } from "./regions.service";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { RegionMessage } from "./entities/region.message";

@Controller("regions")
@ApiTags("지역 API")
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}
  @Get()
  @ApiOperation({ summary: "배너 리스트 조회" })
  @ApiOkResponse({
    description: "배너 리스트를 조회합니다.",
  })
  async findAll(@Res() res: Response) {
    const regions = await this.regionsService.findAll();
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: RegionMessage.GET_LIST,
      data: regions,
    });
  }
}
