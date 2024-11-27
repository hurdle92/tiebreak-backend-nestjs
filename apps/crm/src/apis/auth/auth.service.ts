import {
  ForbiddenException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { User } from "../user/entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SignInRequestDto } from "./entities/dto/request/sign-in-request.dto";
import { SignInResponseDto } from "./entities/dto/response/sign-in-response.dto";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { UserPayload } from "../../configs/guards/types/user-payload.type";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  /**
   * 로그인 api
   *
   * @returns {Promise<SignInResponseDto>}
   */
  async signIn(requestDto: SignInRequestDto): Promise<SignInResponseDto> {
    const user = await this.userRepository.findOne({
      where: { user_id: requestDto.user_id },
      relations: ["club"],
      select: ["user_id", "password", "id", "club"],
    });

    if (!user) {
      throw new ForbiddenException({
        statusCode: HttpStatus.FORBIDDEN,
        message: "등록되지 않은 사용자입니다.",
        error: "Forbidden",
      });
    }

    const isMatch = await bcrypt.compare(requestDto.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload: UserPayload = {
      id: user.id,
      user_id: user.user_id,
      club_id: user.club.id,
    };
    const access_token = await this.jwtService.signAsync(payload);

    return {
      access_token: access_token,
      refresh_token: "",
    };
  }
}
