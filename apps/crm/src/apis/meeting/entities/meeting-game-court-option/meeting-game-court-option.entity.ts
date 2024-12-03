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
import { Meeting } from "../meeting.entity";
import { Game } from "../../../game/entities/game.entity";

/**
 * 정규 모임의 게임별 코트 옵션
 * 옵션튼 정규모임에 여러개 속함
 * ex) 반포 토요일 모임 1번 코트, 2번 코트
 *
 */

@Entity("meeting_game_court_options")
export class MeetingGameCourtOption {
  @PrimaryGeneratedColumn({ type: "int8" })
  id: number;

  @Column({ type: "text" })
  court_option_value: string;

  @ManyToOne(() => Meeting, (meeting) => meeting.meeting_game_court_options)
  @JoinColumn({ name: "meeting_id", referencedColumnName: "id" })
  meeting: Meeting;

  @OneToMany(() => Game, (game) => game.meeting_game_court_option)
  games: Game[];

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
