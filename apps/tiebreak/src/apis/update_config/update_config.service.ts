import { Injectable } from "@nestjs/common";
import { UpdateConfig } from "./entitis/update-config.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateConfigResponseDto } from "./entitis/response/update-config-response.dto";

@Injectable()
export class UpdateConfigService {
  constructor(
    @InjectRepository(UpdateConfig)
    private updateConfigRepository: Repository<UpdateConfig>,
  ) {}

  /**
   * 가장 첫번째 update config를 찾아 리턴합니다.
   *
   * @returns {Promise<GuestbookResponseDto>}
   */
  async findUpdateConfig() {
    const [updateConfigFirstItem] = await this.updateConfigRepository.find({
      order: {
        id: "ASC",
      },
      take: 1,
    });
    const result = new UpdateConfigResponseDto(updateConfigFirstItem);
    return result;
  }
}
