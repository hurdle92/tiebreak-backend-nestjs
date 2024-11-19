import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Guestbook } from "./src/apis/guestbook/entities/guestbook.entity";
import { Banner } from "./src/apis/banners/entities/banner.entity";
import { UpdateConfig } from "./src/apis/update_config/entitis/update-config.entity";
import { User } from "./src/apis/users/entities/user.entity";
import { Post } from "./src/apis/posts/entities/post.entity";
import { Comment } from "./src/apis/comments/entitis/comment.entity";
import { Region } from "./src/apis/regions/entities/region.entity";
import { DiaryOption } from "./src/apis/diary_options/entities/diary-option.entity";
import { DiaryStatusOption } from "./src/apis/diary_status_options/entities/diary-status-option.entity";
import { Lesson } from "./src/apis/lesson/entities/lesson/lesson.entity";
import { DiaryCategory } from "./src/apis/diary/entities/diary-category.entity";
import { Court } from "./src/apis/courts/entities/court.entity";
import { Topics } from "./src/apis/topics/entities/topic.entity";
import { LessonTimeOption } from "./src/apis/lesson/entities/lesson_time/lesson-time-option.entity";
import { LessonCoreOption } from "./src/apis/lesson/entities/lesson_core/lesson-core-option.entity";
import { LessonCoreBridge } from "./src/apis/lesson/entities/lesson_core/lesson-core-bridge.entity";
import { LessonTimeBridge } from "./src/apis/lesson/entities/lesson_time/lesson-time-bridge.entity";

dotenv.config();

export default new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 6543,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  entities: [
    Guestbook,
    Banner,
    UpdateConfig,
    User,
    Post,
    Comment,
    Region,
    DiaryOption,
    DiaryStatusOption,
    Lesson,
    DiaryCategory,
    Court,
    Topics,
    LessonTimeOption,
    LessonCoreOption,
    LessonCoreBridge,
    LessonTimeBridge,
  ],
  migrations: ["src/database/migrations/*.ts"],
  migrationsTableName: "migrations",
});
