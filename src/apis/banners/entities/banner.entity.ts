import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BannerType } from "./banner-type.enum";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Banners {
  @PrimaryGeneratedColumn({ type: "int8" })
  @ApiProperty({ description: "배너 ID" })
  id: number;

  @Column({ type: "text" })
  @ApiProperty({ description: "배너 제목" })
  title: string;

  @Column({ type: "text" })
  @ApiProperty({ description: "배너 썸네일" })
  thumbnail: string;

  @Column({ type: "int" })
  @ApiProperty({ description: "배너 순서" })
  order: number;

  @Column({ type: "text", nullable: true })
  @ApiProperty({ description: "배너 코트 id" })
  courtId: string;

  @Column({
    type: "enum",
    enum: BannerType,
    default: BannerType.COURT,
  })
  @ApiProperty({ description: "배너 카테고리" })
  type: BannerType;

  @Column({ type: "text" })
  @ApiProperty({ description: "배너 매거진 링크" })
  magazineLink: string;

  @CreateDateColumn()
  created_at: Date;
}
