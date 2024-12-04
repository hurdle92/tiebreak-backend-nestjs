import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Team } from "../../../team/entities/team.entity";
import { Game } from "../../../game/entities/game.entity";
import { Match } from "../../../match/entities/match.entity";
import { MatchResult } from "../match-result/match-result.entity";

/**
 * 게임 경기 결과 entity
 * match에 여러개로 속함
 * 승, 패, 무승부
 * 스코어 기록도 필요 ?
 */

@Entity("game_results")
export class GameResult {
  @PrimaryGeneratedColumn({ type: "int8" })
  id: number;

  @OneToOne(() => Game, (game) => game.game_result)
  @JoinColumn({
    name: "game_id",
    referencedColumnName: "id",
  })
  game: Game;

  @ManyToOne(() => Team, (team) => team.win_result)
  @JoinColumn({
    name: "win_team_id",
    referencedColumnName: "id",
  })
  win_team: Team;

  @ManyToOne(() => Team, (team) => team.lose_result)
  @JoinColumn({
    name: "lose_team_id",
    referencedColumnName: "id",
  })
  lose_team: Team;

  @ManyToOne(() => MatchResult)
  @JoinColumn({
    name: "match_result_id",
    referencedColumnName: "id",
  })
  match_result: MatchResult;

  @Column({ type: "bool", default: false })
  is_draw: boolean;

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
