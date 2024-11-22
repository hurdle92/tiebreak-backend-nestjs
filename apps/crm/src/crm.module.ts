import { Module } from "@nestjs/common";
import { CrmController } from "./crm.controller";
import { CrmService } from "./crm.service";
import { HealthModule } from "./apis/health/health.module";

@Module({
  imports: [HealthModule],
  controllers: [CrmController],
  providers: [CrmService],
})
export class CrmModule {}
