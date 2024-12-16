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
import { Court } from "../../../court/entities/court.entity";
import { Player } from "../player.entity";
import { User } from "../../../user/entity/user.entity";

@Entity("player-user-bridges")
export class PlayerUserBridge {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  player_id: number;

  @PrimaryColumn()
  user_id: number;

  @ManyToOne(() => Player, (player) => player.player_user_bridges)
  @JoinColumn({ name: "player_id", referencedColumnName: "id" })
  player: Player;

  @ManyToOne(() => User, (user) => user.player_user_bridges)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: User;

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

  static toEntity(player: Player, user: User): PlayerUserBridge {
    const bridge = new PlayerUserBridge();
    bridge.player = player;
    bridge.user = user;
    return bridge;
  }
}
