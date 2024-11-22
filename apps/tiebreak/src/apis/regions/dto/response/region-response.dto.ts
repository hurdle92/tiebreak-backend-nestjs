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
  created_at: Date;

  @ApiProperty({ description: "행정구역 수정일시" })
  updated_at: Date;

  constructor(region: Region) {
    this.id = region.id;
    this.name = region.name;
    this.thumbnail = region.thumbnail;
    this.order = region.order;
    this.created_at = region.created_at;
    this.updated_at = region.updated_at;
  }
}
