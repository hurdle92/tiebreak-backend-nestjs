import { ApiProperty } from "@nestjs/swagger";
import { UpdateConfig } from "../update-config.entity";

export class UpdateConfigResponseDto {
  @ApiProperty({ description: "앱 환경 ID" })
  id: number;

  @ApiProperty({ description: "앱 강제 업데이트 여부" })
  isNeedUpdate: boolean;

  @ApiProperty({ description: "앱 업데이트가 필요한 최소 버전" })
  needUpdateVersion: string;

  @ApiProperty({ description: "앱 업데이트가 필요한 최소 버전" })
  expireTimeHours: number;

  @ApiProperty({ description: "앱 환경 생성일시" })
  created_at: Date;

  constructor(updateConfig: UpdateConfig) {
    this.id = updateConfig.id;
    this.isNeedUpdate = updateConfig.isNeedUpdate;
    this.needUpdateVersion = updateConfig.needUpdateVersion;
    this.expireTimeHours = updateConfig.expireTimeHours;
    this.created_at = updateConfig.created_at;
  }
}
