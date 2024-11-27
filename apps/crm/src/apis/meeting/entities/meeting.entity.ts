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
import { Club } from "../../club/entities/club.entity";
import { MeetingCourtBridge } from "./meeting-court-bridge/meeting-court-bridge.entity";
import { Match } from "../../match/entities/match.entity";
import { GameCourtOption } from "../../game/entities/game-court-option/game-court-option.entity";

@Entity("meetings")
export class Meeting {
  @PrimaryGeneratedColumn({ type: "int8" })
  id: number;

  @Column({ type: "text", default: "" })
  name: string;

  @Column({ type: "text", default: "" })
  regular_meeting_time: string;

  @ManyToOne(() => Club, (club) => club.meetings)
  @JoinColumn({ name: "club_id", referencedColumnName: "id" })
  club: Club;

  @OneToMany(
    () => MeetingCourtBridge,
    (meetingCourtBridge) => meetingCourtBridge.meeting,
  )
  meeting_court_bridges: MeetingCourtBridge[];

  @OneToMany(() => Match, (match) => match.meeting)
  matches: Match[];

  @OneToMany(
    () => GameCourtOption,
    (gameCourtOption) => gameCourtOption.meeting,
  )
  game_court_options: GameCourtOption[];

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
