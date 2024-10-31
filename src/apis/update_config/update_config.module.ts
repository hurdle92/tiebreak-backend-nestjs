import { Module } from "@nestjs/common";
import { UpdateConfigService } from "./update_config.service";
import { UpdateConfigController } from "./update_config.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UpdateConfig } from "./entitis/update-config.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UpdateConfig])],
  controllers: [UpdateConfigController],
  providers: [UpdateConfigService],
})
export class UpdateConfigModule {}
