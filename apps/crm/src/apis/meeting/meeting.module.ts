import { Module } from "@nestjs/common";
import { MeetingService } from "./meeting.service";
import { MeetingController } from "./meeting.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Meeting } from "./entities/meeting.entity";
import { MeetingGameCourtOption } from "./entities/meeting-game-court-option/meeting-game-court-option.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Meeting, MeetingGameCourtOption])],
  controllers: [MeetingController],
  providers: [MeetingService],
  exports: [MeetingService],
})
export class MeetingModule {}
