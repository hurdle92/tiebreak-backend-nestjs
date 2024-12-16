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
import { Match } from "../../match/entities/match.entity";
import { GameType } from "./game-type.enum";
import { Team } from "../../team/entities/team.entity";
import { MeetingGameCourtOption } from "../../meeting/entities/meeting-game-court-option/meeting-game-court-option.entity";
import { GameResult } from "../../result/entities/game-result/game-result.entity";

/**
 * 정규 게임에 속하는 게임들
 * 남복, 여복, 혼복, 단식
 * 각 게임은 팀으로 이뤄져있다.
 */

@Entity("games")
export class Game {
  @PrimaryGeneratedColumn({ type: "int8" })
  id: number;

  @ManyToOne(() => Match, (match) => match.games, { onDelete: "CASCADE" })
  @JoinColumn({ name: "match_id", referencedColumnName: "id" })
  match: Match;

  @Column({ type: "text", default: "" })
  note: string;

  @Column({ type: "enum", enum: GameType, default: GameType.DOUBLE })
  game_type: GameType;

  @OneToMany(() => Team, (team) => team.game, { cascade: true })
  teams: Team[];

  @ManyToOne(
    () => MeetingGameCourtOption,
    (meetingGameCourtOption) => meetingGameCourtOption.games,
  )
  @JoinColumn({
    name: "meeting_game_court_option_id",
    referencedColumnName: "id",
  })
  meeting_game_court_option: MeetingGameCourtOption;

  @OneToOne(() => GameResult, (gameResult) => gameResult.game)
  @JoinColumn({
    name: "game_result_id",
    referencedColumnName: "id",
  })
  game_result: GameResult;

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
