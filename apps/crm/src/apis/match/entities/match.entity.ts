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
import { Meeting } from "../../meeting/entities/meeting.entity";
import { Game } from "../../game/entities/game.entity";
import { MatchResult } from "../../result/entities/match-result/match-result.entity";

/**
 * 정규 게임 모임
 *
 *
 */
@Entity("matches")
export class Match {
  @PrimaryGeneratedColumn({ type: "int8" })
  id: number;

  @CreateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  match_date: Date;

  @ManyToOne(() => Meeting, (meeting) => meeting.matches)
  @JoinColumn({ name: "meeting_id", referencedColumnName: "id" })
  meeting: Meeting;

  @Column({ type: "text", default: "" })
  note: string;

  @OneToMany(() => Game, (game) => game.match)
  games: Game[];

  @OneToOne(() => MatchResult, (matchResult) => matchResult.match)
  @JoinColumn({
    name: "match_result_id",
    referencedColumnName: "id",
  })
  match_result: MatchResult;

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
