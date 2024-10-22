import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HealthModule } from "./apis/health/health.module";
import { typeOrmModuleOptions } from "./configs/typeorm.config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GuestbookModule } from "./apis/guestbook/guestbook.module";

@Module({
  imports: [
    HealthModule,
    TypeOrmModule.forRoot(typeOrmModuleOptions),
    GuestbookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
