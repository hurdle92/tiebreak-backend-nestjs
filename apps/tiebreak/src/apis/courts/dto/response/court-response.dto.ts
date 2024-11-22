import { ApiProperty } from "@nestjs/swagger";
import { Court } from "../../entities/court.entity";

export class CourtResponseDto {
  @ApiProperty({ description: "코트 ID" })
  id: number;

  @ApiProperty({ description: "코트 이름" })
  name: string;

  @ApiProperty({ description: "코트 주소" })
  address: string;

  @ApiProperty({ description: "운영 시간" })
  operationTime: string;

  @ApiProperty({ description: "전화번호" })
  phoneNumber: string;

  @ApiProperty({ description: "인스타그램 계정" })
  instagram: string;

  @ApiProperty({ description: "위도" })
  lat: number;

  @ApiProperty({ description: "경도" })
  lng: number;

  @ApiProperty({ description: "코트 설명" })
  description: string;

  @ApiProperty({ description: "도시" })
  city: string;

  @ApiProperty({ description: "지역" })
  district: string;

  @ApiProperty({ description: "주차 가능 여부" })
  isParking: boolean;

  @ApiProperty({ description: "코트 수" })
  numberOfCourts: string;

  @ApiProperty({ description: "코트 유형" })
  courtType: string;

  @ApiProperty({ description: "썸네일 이미지 URL" })
  thumbnail: string;

  @ApiProperty({ description: "온라인 예약 가능 여부" })
  isOnlineReservation: boolean;

  @ApiProperty({ description: "사용 가능 여부" })
  isUse: boolean;

  @ApiProperty({ description: "예약 링크" })
  reservationLink: string;

  @ApiProperty({ description: "한글 이름" })
  koName: string;

  @ApiProperty({ description: "라켓 스트링 서비스 제공 여부" })
  isRacketString: boolean;

  @ApiProperty({ description: "실내 코트 여부" })
  isIndoor: boolean;

  @ApiProperty({ description: "샤워 시설 여부" })
  isShower: boolean;

  @ApiProperty({ description: "우선순위" })
  priority: number;

  @ApiProperty({ description: "코트 가격" })
  courtPrice: string;

  @ApiProperty({ description: "매점 여부" })
  isStore: boolean;

  @ApiProperty({ description: "생성 일시" })
  created_at: Date;

  constructor(court: Court) {
    this.id = court.id;
    this.name = court.name;
    this.address = court.address;
    this.operationTime = court.operationTime;
    this.phoneNumber = court.phoneNumber;
    this.instagram = court.instagram;
    this.lat = court.lat;
    this.lng = court.lng;
    this.description = court.description;
    this.city = court.city;
    this.district = court.district;
    this.isParking = court.isParking;
    this.numberOfCourts = court.numberOfCourts;
    this.courtType = court.courtType;
    this.thumbnail = court.thumbnail;
    this.isOnlineReservation = court.isOnlineReservation;
    this.isUse = court.isUse;
    this.reservationLink = court.reservationLink;
    this.koName = court.koName;
    this.isRacketString = court.isRacketString;
    this.isIndoor = court.isIndoor;
    this.isShower = court.isShower;
    this.priority = court.priority;
    this.courtPrice = court.courtPrice;
    this.isStore = court.isStore;
    this.created_at = court.created_at;
  }
}
