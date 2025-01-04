import { AuthService } from "./auth.service";
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Res,
  HttpStatus,
  Post,
  Body,
  Query,
  Delete,
  UseGuards,
  Req,
} from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { SignInRequestDto } from "./entities/dto/request/sign-in-request.dto";
import { AuthMessage } from "./entities/auth.message";
import { JwtAccessAuthGuard } from "../../configs/guards/jwt-access.guard";
import { UserService } from "../user/user.service";
import { SignUpRequestDto } from "./entities/dto/request/sign-up-request.dto";

@Controller("auth")
@ApiTags("인증 API")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post("signin")
  @ApiOperation({ summary: "로그인" })
  @ApiOkResponse({ description: "로그인에 성공했습니다." })
  async signin(@Body() requestDto: SignInRequestDto, @Res() res: Response) {
    const data = await this.authService.signIn(requestDto);

    return res.status(HttpStatus.OK).json({
      code: 200,
      message: AuthMessage.SIGN_IN,
      data: data,
    });
  }

  @Post("signup")
  @ApiOperation({ summary: "회원가입" })
  @ApiOkResponse({ description: "회원가입에 성공했습니다." })
  async signup(@Body() requestDto: SignUpRequestDto, @Res() res: Response) {
    const data = await this.authService.signUp(requestDto);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: AuthMessage.SIGN_UP,
      data: data,
    });
  }

  @Get("profile")
  @UseGuards(JwtAccessAuthGuard)
  @ApiOperation({ summary: "프로필" })
  @ApiOkResponse({ description: "프로필 조회에 성공했습니다." })
  async profile(@Req() req, @Res() res: Response) {
    const user_id: string = req.user.user_id;
    const user = await this.userService.findUserById({ user_id });
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: AuthMessage.PROFILE_GET,
      data: user,
    });
  }
}
