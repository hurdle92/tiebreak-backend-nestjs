import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { Repository } from "typeorm";
import { UserFindByIdDto } from "./entity/request/user-find-by-id.dto";
import { UserResponseDto } from "./entity/response/user-response.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  /**
   * 유저 프로필 정보
   *
   * @returns {Promise<SignInResponseDto>}
   */
  async findUserById(requestDto: UserFindByIdDto): Promise<UserResponseDto> {
    const user = await this.userRepository.findOne({
      where: { user_id: requestDto.user_id },
      relations: { club: true },
    });
    return new UserResponseDto(user);
  }

  /**
   * 로그인 api
   *
   * @returns {Promise<SignInResponseDto>}
   */
  async findClubMembers(clubId: number): Promise<UserResponseDto[]> {
    const users = await this.userRepository.find({
      where: { club: { id: clubId } },
    });
    const result = users.map((user) => new UserResponseDto(user));
    return result;
  }
}
