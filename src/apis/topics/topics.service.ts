import { Injectable } from "@nestjs/common";
import { CreateTopicDto } from "./dto/create-topic.dto";
import { UpdateTopicDto } from "./dto/update-topic.dto";
import { Topic } from "./entities/topic.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class TopicsService {
  constructor(
    @InjectRepository(Topic) private topicRepository: Repository<Topic>,
  ) {}

  create(createTopicDto: CreateTopicDto) {
    return "This action adds a new topic";
  }

  /**
   * 모든 토픽 정보를 조회한다.
   *
   * @returns {Promise<Topic[]>}
   */
  async findAll(): Promise<Topic[]> {
    return await this.topicRepository.find({ relations: ["courts"] });
  }

  findOne(id: number) {
    return `This action returns a #${id} topic`;
  }

  update(id: number, updateTopicDto: UpdateTopicDto) {
    return `This action updates a #${id} topic`;
  }

  remove(id: number) {
    return `This action removes a #${id} topic`;
  }
}
