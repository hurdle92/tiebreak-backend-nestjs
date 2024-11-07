import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { UserResponseDto } from "./entities/response/user-response.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  /**
   * 유저 id에 해당하는 유저 정보를 조회합니다.
   *
   * @param {number} id - 유저 id
   * @returns {Promise<UserResponseDto>}
   */
  async findOne(id: number): Promise<UserResponseDto> {
    const user = await this.userRepository.findOne({ where: { id } });
    return new UserResponseDto(user);
  }
}
