import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Player } from "../../player/entities/player.entity";
import { Game } from "../../game/entities/game.entity";
import { GameResult } from "../../result/entities/game-result/game-result.entity";

@Entity("teams")
export class Team {
  @PrimaryGeneratedColumn({ type: "int8" })
  id: number;

  @OneToMany(() => Player, (player) => player.team, { cascade: true })
  players: Player[];

  @ManyToOne(() => Game, (game) => game.teams)
  @JoinColumn({ name: "game_id", referencedColumnName: "id" })
  game: Game;

  @OneToMany(() => GameResult, (gameResult) => gameResult.win_team)
  win_result: GameResult;

  @OneToMany(() => GameResult, (gameResult) => gameResult.lose_team)
  lose_result: GameResult;

  @CreateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at: Date;

  @UpdateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: true,
  })
  updated_at: Date;
}
