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

@Entity("teams")
export class Team {
  @PrimaryGeneratedColumn({ type: "int8" })
  id: number;

  @OneToMany(() => Player, (player) => player.team)
  players: Player[];

  @ManyToOne(() => Game, (game) => game.teams)
  @JoinColumn({ name: "game_id", referencedColumnName: "id" })
  game: Game;

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
