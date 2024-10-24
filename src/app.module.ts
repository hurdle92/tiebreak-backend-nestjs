import { Module } from "@nestjs/common";
import { HealthModule } from "./apis/health/health.module";
import { typeOrmModuleOptions } from "./database/typeorm.config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GuestbookModule } from "./apis/guestbook/guestbook.module";
import { ConfigModule } from "./configs";

@Module({
  imports: [
    HealthModule,
    TypeOrmModule.forRoot(typeOrmModuleOptions),
    GuestbookModule,
    ConfigModule,
  ],
})
export class AppModule {}
