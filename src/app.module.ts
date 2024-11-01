import { Module } from "@nestjs/common";
import { HealthModule } from "./apis/health/health.module";
import { typeOrmModuleOptions } from "./database/typeorm.config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GuestbookModule } from "./apis/guestbook/guestbook.module";
import { CourtsModule } from "./apis/courts/courts.module";
import { TopicsModule } from "./apis/topics/topics.module";
import { BannersModule } from "./apis/banners/banners.module";
import { RegionsModule } from "./apis/regions/regions.module";
import { UpdateConfigModule } from "./apis/update_config/update_config.module";
import { UsersModule } from "./apis/users/users.module";
import { PostsModule } from "./apis/posts/posts.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmModuleOptions),
    HealthModule,
    GuestbookModule,
    CourtsModule,
    TopicsModule,
    BannersModule,
    RegionsModule,
    UpdateConfigModule,
    UsersModule,
    PostsModule,
  ],
})
export class AppModule {}
