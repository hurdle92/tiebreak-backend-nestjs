import { Module } from "@nestjs/common";
import { ResultService } from "./result.service";
import { ResultController } from "./result.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GameResult } from "./entities/game-result/game-result.entity";
import { MatchResult } from "./entities/match-result/match-result.entity";

@Module({
  imports: [TypeOrmModule.forFeature([GameResult, MatchResult])],
  controllers: [ResultController],
  providers: [ResultService],
})
export class ResultModule {}
