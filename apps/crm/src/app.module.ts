import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmModuleOptions } from "./database/typeorm.config";
import { HealthModule } from "./apis/health/health.module";
import { UserModule } from "./apis/user/user.module";
import { AuthModule } from "./apis/auth/auth.module";
import { ClubModule } from "./apis/club/club.module";
import { MatchModule } from "./apis/match/match.module";
import { MeetingModule } from "./apis/meeting/meeting.module";
import { GameModule } from "./apis/game/game.module";
import { CourtModule } from "./apis/court/court.module";

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
