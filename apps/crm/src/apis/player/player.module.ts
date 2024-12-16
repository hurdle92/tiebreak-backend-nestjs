import { Module } from "@nestjs/common";
import { PlayerService } from "./player.service";
import { PlayerController } from "./player.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Player } from "./entities/player.entity";
import { Team } from "../team/entities/team.entity";
import { User } from "../user/entity/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Player, Team, User])],
  controllers: [PlayerController],
  providers: [PlayerService],
  exports: [PlayerService],
})
export class PlayerModule {}
