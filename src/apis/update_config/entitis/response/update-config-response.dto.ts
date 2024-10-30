import { ApiProperty } from "@nestjs/swagger";
import { UpdateConfig } from "../update-config.entity";

export class UpdateConfigResponseDto {
  @ApiProperty({ description: "앱 환경 ID" })
  id: number;

  @ApiProperty({ description: "앱 강제 업데이트 여부" })
  isNeedUpdate: boolean;

  @ApiProperty({ description: "앱 현재 버전" })
  currentVersion: string;

  @ApiProperty({ description: "앱 업데이트가 필요한 최소 버전" })
  minReuqiredUpdateVersion: string;

  @ApiProperty({ description: "행정구역 생성일시" })
  createdAt: Date;

  @ApiProperty({ description: "행정구역 수정일시" })
  updatedAt: Date;

  constructor(updateConfig: UpdateConfig) {
    this.id = updateConfig.id;
    this.isNeedUpdate = updateConfig.isNeedUpdate;
    this.currentVersion = updateConfig.currentVersion;
    this.minReuqiredUpdateVersion = updateConfig.minReuqiredUpdateVersion;
    this.createdAt = updateConfig.createdAt;
    this.updatedAt = updateConfig.updatedAt;
  }
}
