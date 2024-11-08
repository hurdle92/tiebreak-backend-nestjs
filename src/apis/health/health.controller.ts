import { Controller, Get, Res, HttpStatus } from "@nestjs/common";
import { Response } from "express";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { HealthService } from "./health.service";

@Controller("health-check")
@ApiTags("서버 상태 확인 API")
export class HealthController {
  constructor(private readonly appService: HealthService) {}

  @Get()
  @ApiOperation({ summary: "서버 상태를 확인합니다." })
  healthCheck(@Res() res: Response) {
    const result = this.appService.sendOk();

    return res.status(HttpStatus.OK).send(result);
  }
}
