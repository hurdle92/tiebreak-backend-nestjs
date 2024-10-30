import { Module } from '@nestjs/common';
import { UpdateConfigService } from './update_config.service';
import { UpdateConfigController } from './update_config.controller';

@Module({
  controllers: [UpdateConfigController],
  providers: [UpdateConfigService],
})
export class UpdateConfigModule {}
