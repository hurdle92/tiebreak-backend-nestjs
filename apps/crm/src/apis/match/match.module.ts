import { Module } from "@nestjs/common";
import { MatchService } from "./match.service";
import { MatchController } from "./match.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Match } from "./entities/match.entity";
import { GameModule } from "../game/game.module";
import { PlayerModule } from "../player/player.module";

@Module({
  imports: [TypeOrmModule.forFeature([Match]), GameModule, PlayerModule],
  controllers: [MatchController],
  providers: [MatchService],
})
export class MatchModule {}
