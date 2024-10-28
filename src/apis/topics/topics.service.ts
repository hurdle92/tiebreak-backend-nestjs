import { Injectable } from "@nestjs/common";
import { CreateTopicDto } from "./dto/create-topic.dto";
import { Topic } from "./entities/topic.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class TopicsService {
  constructor(
    @InjectRepository(Topic) private topicRepository: Repository<Topic>,
  ) {}

  /**
   * 모든 토픽 정보를 조회한다.
   *
   * @returns {Promise<Topic[]>}
   */
  async findAll(): Promise<Topic[]> {
    return await this.topicRepository.find({ relations: ["courts"] });
  }
}
