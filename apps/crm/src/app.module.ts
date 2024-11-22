import { Module } from "@nestjs/common";
import { HealthModule } from "./apis/health/health.module";

@Module({
  imports: [HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
