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
import { Meeting } from "../../../meeting/entities/meeting.entity";

@Entity("game_court_options")
export class GameCourtOption {
  @PrimaryGeneratedColumn({ type: "int8" })
  id: number;

  @Column({ type: "text" })
  court_option_value: string;

  @ManyToOne(() => Meeting, (meeting) => meeting.game_court_options)
  @JoinColumn({ name: "meeting_id", referencedColumnName: "id" })
  meeting: Meeting;

  //   @OneToMany(
  //     () => PlayerUserBridge,
  //     (playerUserBridge) => playerUserBridge.player,
  //   )
  //   player_user_bridges: PlayerUserBridge[];
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
