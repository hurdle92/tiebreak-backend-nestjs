import { ApiProperty } from "@nestjs/swagger";
import { Region } from "../../entities/region.entity";

export class RegionResponseDto {
  @ApiProperty({ description: "행정구역 ID" })
  id: number;

  @ApiProperty({ description: "행정구역 이름" })
  name: string;

  @ApiProperty({ description: "행정구역 썸네일" })
  thumbnail: string;

  @ApiProperty({ description: "행정구역 순서" })
  order: number;

  @ApiProperty({ description: "행정구역 생성일시" })
  createdAt: Date;

  @ApiProperty({ description: "행정구역 수정일시" })
  updatedAt: Date;

  constructor(region: Region) {
    this.id = region.id;
    this.name = region.name;
    this.thumbnail = region.thumbnail;
    this.order = region.order;
    this.createdAt = region.createdAt;
    this.updatedAt = region.updatedAt;
  }
}
