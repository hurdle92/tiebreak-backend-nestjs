import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Team } from "../../../team/entities/team.entity";
import { Game } from "../../../game/entities/game.entity";
import { Match } from "../../../match/entities/match.entity";
import { GameResult } from "../game-result/game-result.entity";

/**
 * 정규 게임 결과 entity
 * game result를 여러개 포함
 */

@Entity("match_results")
export class MatchResult {
  @PrimaryGeneratedColumn({ type: "int8" })
  id: number;

  @OneToOne(() => Match, (match) => match.match_result)
  @JoinColumn({
    name: "match_id",
    referencedColumnName: "id",
  })
  match: Match;

  @OneToMany(() => GameResult, (gameResult) => gameResult.match_result)
  game_results: GameResult[];

  @Column({ type: "text", default: "" })
  note: string;

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
