import { Module } from "@nestjs/common";
import { ClubService } from "./club.service";
import { ClubController } from "./club.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Club } from "./entities/club.entity";
import { MeetingModule } from "../meeting/meeting.module";

@Module({
  imports: [TypeOrmModule.forFeature([Club]), MeetingModule],
  controllers: [ClubController],
  providers: [ClubService],
})
export class ClubModule {}
