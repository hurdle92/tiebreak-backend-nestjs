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
import { DiaryOptionsModule } from "./apis/diary_options/diary-options.module";
import { DiaryModule } from "./apis/diary/diary.module";
import { CommentsModule } from "./apis/comments/comments.module";
import { DiaryStatusOptionsModule } from "./apis/diary_status_options/diary_status_options.module";
import { LessonModule } from "./lesson/lesson.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmModuleOptions),
    HealthModule,
    GuestbookModule,
    BannersModule,
    CourtsModule,
    TopicsModule,
    UpdateConfigModule,
    PostsModule,
    CommentsModule,
    RegionsModule,
    DiaryOptionsModule,
    UsersModule,
    DiaryStatusOptionsModule,
    LessonModule,
    DiaryModule,
  ],
})
export class AppModule {}
