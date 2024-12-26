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
import { JwtAccessAuthGuard } from "../../configs/guards/jwt-access.guard";
import { UserPayload } from "../../configs/guards/types/user-payload.type";
import { UserService } from "../user/user.service";
import { AssignmentService } from "./assignment.service";
import { AssignmentMessage } from "./entity/assignment.message";
import { AssignmentCreateRequestDto } from "./entity/dtos/request/assignment-create-request.dto";

@Controller("assignment")
export class AssignmentController {
  constructor(private readonly assignmentService: AssignmentService) {}

  @Get("regions")
  @ApiOperation({ summary: "지역 조회 API" })
  async findRegions(@Req() req, @Res() res: Response) {
    const result = await this.assignmentService.findRegions();
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: AssignmentMessage.GET_REGIONS_LIST,
      data: result,
    });
  }

  @Post()
  @ApiOperation({ summary: "과제 폼 제출" })
  @ApiResponse({
    status: 200,
    description: "과제 등록 폼 제출",
  })
  async create(
    @Body() requestDto: AssignmentCreateRequestDto,
    @Res() res: Response,
  ) {
    await this.assignmentService.createForm(requestDto);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: AssignmentMessage.CREATED,
    });
  }
}
