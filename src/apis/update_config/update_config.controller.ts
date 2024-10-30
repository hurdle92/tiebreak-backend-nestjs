import { Controller } from '@nestjs/common';
import { UpdateConfigService } from './update_config.service';

@Controller('update-config')
export class UpdateConfigController {
  constructor(private readonly updateConfigService: UpdateConfigService) {}
}
