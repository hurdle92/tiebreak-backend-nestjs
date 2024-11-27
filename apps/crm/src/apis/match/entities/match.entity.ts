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
import { Meeting } from "../../meeting/entities/meeting.entity";
import { Game } from "../../game/entities/game.entity";

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
