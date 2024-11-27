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
import { PlayerUserBridge } from "../../player/entities/player-user-bridge/player-user-bridge";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn({ type: "int8" })
  id: number;

  @Column({ type: "text", default: "" })
  user_id: string;

  @Column({ type: "text", default: "", select: false })
  password: string;

  @Column({ type: "text", default: "" })
  name: string;

  @Column({ type: "text", default: "" })
  ntrp: string;

  @Column({ type: "text", default: "" })
  email: string;

  @ManyToOne(() => Club, (club) => club.users)
  @JoinColumn({ name: "club_id", referencedColumnName: "id" })
  club: Club;

  @OneToMany(
    () => PlayerUserBridge,
    (playerUserBridge) => playerUserBridge.user,
  )
  player_user_bridges: PlayerUserBridge[];

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
