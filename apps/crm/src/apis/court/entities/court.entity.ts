import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MeetingCourtBridge } from "../../meeting/entities/meeting-court-bridge/meeting-court-bridge.entity";

@Entity("courts")
export class Court {
  @PrimaryGeneratedColumn({ type: "int8" })
  id: number;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  address: string;

  @Column({ type: "text" })
  thumbnail: string;

  @OneToMany(
    () => MeetingCourtBridge,
    (meetingCourtBridge) => meetingCourtBridge.court,
  )
  meeting_court_bridges: MeetingCourtBridge[];

  @CreateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at: Date;

  @CreateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  updated_at: Date;
}
