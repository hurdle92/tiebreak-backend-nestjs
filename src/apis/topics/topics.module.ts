import { Module } from "@nestjs/common";
import { TopicsService } from "./topics.service";
import { TopicsController } from "./topics.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Topics } from "./entities/topic.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Topics])],
  controllers: [TopicsController],
  providers: [TopicsService],
})
export class TopicsModule {}
