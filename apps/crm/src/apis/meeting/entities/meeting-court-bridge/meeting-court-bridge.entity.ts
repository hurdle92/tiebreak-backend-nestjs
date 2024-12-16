import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Meeting } from "../meeting.entity";
import { Court } from "../../../court/entities/court.entity";

@Entity("meeting-court-bridges")
export class MeetingCourtBridge {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  meeting_id: number;

  @PrimaryColumn()
  court_id: number;

  @ManyToOne(() => Meeting, (meeting) => meeting.meeting_court_bridges)
  @JoinColumn({ name: "meeting_id", referencedColumnName: "id" })
  meeting: Meeting;

  @ManyToOne(() => Court, (court) => court.meeting_court_bridges)
  @JoinColumn({ name: "court_id", referencedColumnName: "id" })
  court: Court;

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

  static create(meeting: Meeting, court: Court): MeetingCourtBridge {
    const bridge = new MeetingCourtBridge();
    bridge.meeting = meeting;
    bridge.court = court;
    return bridge;
  }
}
