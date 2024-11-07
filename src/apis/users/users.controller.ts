import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Res,
  HttpStatus,
} from "@nestjs/common";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { Response } from "express";
import { UsersService } from "./users.service";
import { UserMessage } from "./entities/user.message";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(":id")
  @ApiOperation({ summary: "유저 정보 상세 조회" })
  @ApiOkResponse({
    description: "id가 일치하는 유저 정보를 조회합니다.",
  })
  async findOne(
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response,
  ) {
    const user = await this.usersService.findOne(id);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: UserMessage.DETAIL,
      data: user,
    });
  }
}
