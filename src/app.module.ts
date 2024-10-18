import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HealthCheckModule } from "./health-check/health-check.module";
import { typeOrmModuleOptions } from "./configs/typeorm.config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GuestbookModule } from "./guestbook/guestbook.module";

@Module({
  imports: [
    HealthCheckModule,
    TypeOrmModule.forRoot(typeOrmModuleOptions),
    GuestbookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
