import { Diary } from "../../diary/entities/diary.entity";
import { Topics } from "../../topics/entities/topic.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("courts")
export class Court {
  @PrimaryGeneratedColumn({ type: "int8" })
  id: number;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  address: string;

  @Column({ type: "text" })
  operationTime: string;

  @Column({ type: "text" })
  phoneNumber: string;

  @Column({ type: "text" })
  instagram: string;

  @Column({ type: "float" })
  lat: number;

  @Column({ type: "float" })
  lng: number;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "text" })
  city: string;

  @Column({ type: "text" })
  district: string;

  @Column({ type: "boolean" })
  isParking: boolean;

  @Column({ type: "text" })
  numberOfCourts: string;

  @Column({ type: "text" })
  courtType: string;

  @Column({ type: "text" })
  thumbnail: string;

  @Column({ type: "boolean", default: false })
  isOnlineReservation: boolean;

  @Column({ type: "boolean", default: false })
  isUse: boolean;

  @Column({ type: "text" })
  reservationLink: string;

  @Column({ type: "text" })
  koName: string;

  @Column({ type: "boolean", default: false })
  isRacketString: boolean;

  @Column({ type: "boolean", default: false })
  isIndoor: boolean;

  @Column({ type: "boolean", default: false })
  isShower: boolean;

  @Column({ type: "int", default: 0 })
  priority: number;

  @Column({ type: "text" })
  courtPrice: string;

  @Column({ type: "boolean", default: false })
  isStore: boolean;

  @ManyToOne(() => Topics, (topic) => topic.courts)
  topic: Topics;

  @OneToOne(() => Diary, (diary) => diary.court)
  diary: Diary;

  @CreateDateColumn()
  created_at: Date;
}
