import { Injectable } from "@nestjs/common";
import { Topics } from "./entities/topic.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class TopicsService {
  constructor(
    @InjectRepository(Topics) private topicRepository: Repository<Topics>,
  ) {}

  /**
   * 모든 토픽 정보를 조회한다.
   *
   * @returns {Promise<Topic[]>}
   */
  async findAll(): Promise<Topics[]> {
    return await this.topicRepository.find({ relations: ["courts"] });
  }
}
