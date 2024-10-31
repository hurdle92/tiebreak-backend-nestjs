import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { UpdateConfigService } from "./update_config.service";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { Response } from "express";
import { UpdateConfigMessage } from "./entitis/update-config.message";

@Controller("update-config")
export class UpdateConfigController {
  constructor(private readonly updateConfigService: UpdateConfigService) {}

  @Get()
  @ApiOperation({ summary: "배너 리스트 조회" })
  @ApiOkResponse({
    description: "배너 리스트를 조회합니다.",
  })
  async getUpdateConfig(@Res() res: Response) {
    const updateConfig = await this.updateConfigService.findUpdateConfig();
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: UpdateConfigMessage.GET_UPDATE,
      data: updateConfig,
    });
  }
}
