import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Meeting } from "../../meeting/entities/meeting.entity";

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
