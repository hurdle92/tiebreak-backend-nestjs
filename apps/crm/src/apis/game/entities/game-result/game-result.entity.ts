import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Game } from "../game.entity";
import { GameResultType } from "./game-result-type";

/**
 * 게임 경기 결과 entity
 * 승, 패, 무승부
 * 스코어 기록도 필요 ?
 */

@Entity("game_results")
export class GameResult {
  @PrimaryGeneratedColumn({ type: "int8" })
  id: number;

  @Column({ type: "enum", enum: GameResultType, default: GameResultType.lose })
  game_result_type: GameResultType;

  @ManyToOne(() => Game, (game) => game.game_results)
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
