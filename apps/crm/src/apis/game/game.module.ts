import { Module } from "@nestjs/common";
import { GameService } from "./game.service";
import { GameController } from "./game.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Game } from "./entities/game.entity";
import { GameCourtOption } from "./entities/game-court-option/game-court-option.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Game, GameCourtOption])],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
