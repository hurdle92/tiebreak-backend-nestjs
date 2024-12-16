import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmModuleOptions } from "./database/typeorm.config";
import { HealthModule } from "./apis/health-check/health.module";
import { UserModule } from "./apis/user/user.module";
import { AuthModule } from "./apis/auth/auth.module";
import { ClubModule } from "./apis/club/club.module";
import { MatchModule } from "./apis/match/match.module";
import { MeetingModule } from "./apis/meeting/meeting.module";
import { GameModule } from "./apis/game/game.module";
import { CourtModule } from "./apis/court/court.module";
import { PlayerModule } from "./apis/player/player.module";
import { TeamModule } from "./apis/team/team.module";
import { ResultModule } from "./apis/result/result.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmModuleOptions),
    HealthModule,
    UserModule,
    AuthModule,
    ClubModule,
    MatchModule,
    MeetingModule,
    GameModule,
    CourtModule,
    PlayerModule,
    TeamModule,
    ResultModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
