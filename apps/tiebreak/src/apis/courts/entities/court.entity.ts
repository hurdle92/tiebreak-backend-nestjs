import { ColumnNumericTransformer } from "../../../configs/transformers/numeric_transformer";
import { Diary } from "../../diary/entities/diary.entity";
import { Lesson } from "../../lesson/entities/lesson/lesson.entity";
import { Topics } from "../../topics/entities/topic.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
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

  @Column("numeric", {
    transformer: new ColumnNumericTransformer(),
  })
  lat: number;

  @Column("numeric", {
    transformer: new ColumnNumericTransformer(),
  })
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

  @OneToMany(() => Lesson, (lesson) => lesson.court)
  lessons: Lesson[];

  @CreateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at: Date;
}
