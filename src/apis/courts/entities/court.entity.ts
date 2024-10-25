import { Topic } from "../../topics/entities/topic.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Court {
  @PrimaryGeneratedColumn()
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
  naverLink: string;

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

  @ManyToOne(() => Topic, (topic) => topic.courts)
  @JoinColumn({ name: "topic_id" })
  topic: Topic;

  @Column({ type: "int", nullable: true })
  topic_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  static create(
    name: string,
    address: string,
    operationTime: string,
    phoneNumber: string,
    instagram: string,
    lat: number,
    lng: number,
    naverLink: string,
    description: string,
    city: string,
    district: string,
    isParking: boolean,
    numberOfCourts: string,
    courtType: string,
    thumbnail: string,
    isOnlineReservation: boolean,
    isUse: boolean,
    reservationLink: string,
    koName: string,
    isRacketString: boolean,
    isIndoor: boolean,
    isShower: boolean,
    priority: number,
    courtPrice: string,
    isStore: boolean,
  ): Court {
    const court = new Court();
    court.name = name;
    court.address = address;
    court.operationTime = operationTime;
    court.phoneNumber = phoneNumber;
    court.instagram = instagram;
    court.lat = lat;
    court.lng = lng;
    court.naverLink = naverLink;
    court.description = description;
    court.city = city;
    court.district = district;
    court.isParking = isParking;
    court.numberOfCourts = numberOfCourts;
    court.courtType = courtType;
    court.thumbnail = thumbnail;
    court.isOnlineReservation = isOnlineReservation;
    court.isUse = isUse;
    court.reservationLink = reservationLink;
    court.koName = koName;
    court.isRacketString = isRacketString;
    court.isIndoor = isIndoor;
    court.isShower = isShower;
    court.priority = priority;
    court.courtPrice = courtPrice;
    court.isStore = isStore;
    return court;
  }
}
