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
import { User } from "../../user/entity/user.entity";
import { Meeting } from "../../meeting/entities/meeting.entity";
import { Court } from "../../court/entities/court.entity";

@Entity("clubs")
export class Club {
  @PrimaryGeneratedColumn({ type: "int8" })
  id: number;

  @Column({ type: "text", default: "" })
  name: string;

  @Column({ type: "text", default: "" })
  thumbnail: string;

  @Column({ type: "text", default: "" })
  description: string;

  @Column({ type: "text", default: "" })
  regular_play_time: string;

  @Column({ type: "text", default: "" })
  region: string;

  @OneToMany(() => User, (user) => user.club)
  users: User[];

  @ManyToOne(() => Court, (court) => court.clubs)
  @JoinColumn({ name: "court_id", referencedColumnName: "id" })
  main_court: Court;

  @OneToMany(() => Meeting, (meeting) => meeting.club)
  meetings: Meeting[];

  @CreateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  club_created_at: Date;

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
