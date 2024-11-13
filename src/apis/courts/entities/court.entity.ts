import { Diary } from "../../diary/entities/diary.entity";
import { Lesson } from "../../lesson/entities/lesson.entity";
import { Topics } from "../../topics/entities/topic.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
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

  @Column({ type: "text", default: " " })
  instagram: string;

  @Column({ type: "numeric" })
  lat: number;

  @Column({ type: "numeric" })
  lng: number;

  @Column({ type: "text", default: " " })
  description: string;

  @Column({ type: "text" })
  city: string;

  @Column({ type: "text" })
  district: string;

  @Column({ type: "boolean", default: true })
  isParking: boolean;

  @Column({ type: "text" })
  numberOfCourts: string;

  @Column({ type: "text" })
  courtType: string;

  @Column({ type: "text" })
  thumbnail: string;

  @Column({ type: "boolean", default: false })
  isOnlineReservation: boolean;

  @Column({ type: "boolean", default: true })
  isUse: boolean;

  @Column({ type: "text", default: " " })
  reservationLink: string;

  @Column({ type: "text" })
  koName: string;

  @Column({ type: "boolean", default: false })
  isRacketString: boolean;

  @Column({ type: "boolean", default: false })
  isIndoor: boolean;

  @Column({ type: "boolean", default: false })
  isShower: boolean;

  @Column({ type: "int2", default: 1 })
  priority: number;

  @Column({ type: "text", default: " " })
  courtPrice: string;

  @Column({ type: "boolean", default: false })
  isStore: boolean;

  @ManyToOne(() => Topics, (topic) => topic.courts)
  topic: Topics;

  // @OneToOne(() => Diary, (diary) => diary.court)
  // diary: Diary;

  // @OneToOne(() => Lesson, (lesson) => lesson.court)
  // lesson: Lesson;

  @CreateDateColumn({
    type: "timestamp with time zone",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at: Date;
}
