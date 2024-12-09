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
import { PlayerUserBridge } from "./player-user-bridge/player-user-bridge";
import { Team } from "../../team/entities/team.entity";

@Entity("players")
export class Player {
  @PrimaryGeneratedColumn({ type: "int8" })
  id: number;

  @ManyToOne(() => Team, (team) => team.players)
  @JoinColumn({ name: "team_id", referencedColumnName: "id" })
  team: Team;

  @OneToMany(
    () => PlayerUserBridge,
    (playerUserBridge) => playerUserBridge.player,
  )
  player_user_bridges: PlayerUserBridge[];

  @Column({ type: "bool", default: false })
  is_guest: boolean;

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

  static create(team, is_guest) {
    const player = new Player();
    player.team = team;
    player.is_guest = is_guest;
    return player;
  }
}
