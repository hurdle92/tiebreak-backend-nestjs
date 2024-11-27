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
import { Match } from "../../match/entities/match.entity";
import { GameType } from "./game-type.enum";
import { Team } from "../../team/entities/team.entity";

@Entity("games")
export class Game {
  @PrimaryGeneratedColumn({ type: "int8" })
  id: number;

  @ManyToOne(() => Match, (match) => match.games)
  @JoinColumn({ name: "match_id", referencedColumnName: "id" })
  match: Match;

  @Column({ type: "text", default: "" })
  note: string;

  @Column({ type: "enum", enum: GameType, default: GameType.DOUBLE })
  game_type: GameType;

  @OneToMany(() => Team, (team) => team.game)
  teams: Team[];

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
