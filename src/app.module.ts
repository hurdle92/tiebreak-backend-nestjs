import { Module } from "@nestjs/common";
import { HealthModule } from "./apis/health/health.module";
import { typeOrmModuleOptions } from "./database/typeorm.config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GuestbookModule } from "./apis/guestbook/guestbook.module";
import { CourtsModule } from "./apis/courts/courts.module";
import { TopicsModule } from "./apis/topics/topics.module";
import { BannersModule } from "./apis/banners/banners.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmModuleOptions),
    HealthModule,
    GuestbookModule,
    CourtsModule,
    TopicsModule,
    BannersModule,
  ],
})
export class AppModule {}
