import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Res,
  HttpStatus,
  UseGuards,
  Req,
} from "@nestjs/common";
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Response } from "express";
import { ClubService } from "./club.service";
import { Club } from "./entities/club.entity";
import { ClubMessage } from "./entities/club.message";
import { JwtAccessAuthGuard } from "../../configs/guards/jwt-access.guard";
import { UserPayload } from "../../configs/guards/types/user-payload.type";
import { UserService } from "../user/user.service";

@Controller("clubs")
@ApiTags("클럽 API")
export class ClubController {
  constructor(
    private readonly clubService: ClubService,
    private readonly userService: UserService,
  ) {}

  @Get("/members")
  @UseGuards(JwtAccessAuthGuard)
  @ApiOperation({ summary: "클럽 멤버 조회" })
  @ApiParam({ name: "id", description: "클럽 ID" })
  @ApiResponse({
    status: 200,
    description: "클럽 멤버 조회 성공",
    type: [Club],
  })
  async findClubMembers(@Req() req, @Res() res: Response) {
    const user: UserPayload = req.user;
    const club_id = user.club_id;
    const members = await this.userService.findClubMembers(club_id);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: ClubMessage.GET_MEMBERS_LIST,
      data: members,
    });
  }

  @Get("/:id")
  @UseGuards(JwtAccessAuthGuard)
  @ApiOperation({ summary: "클럽 상세 조회" })
  @ApiParam({ name: "id", description: "클럽 ID" })
  @ApiResponse({
    status: 200,
    description: "레슨 상세 정보 조회 성공",
    type: Club,
  })
  async findOne(
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response,
  ) {
    const club = await this.clubService.findOne(id);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: ClubMessage.GET_DETAIL,
      data: club,
    });
  }
}
