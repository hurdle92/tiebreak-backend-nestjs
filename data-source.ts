import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Guestbook } from "src/apis/guestbook/entities/guestbook.entity";
import { Banner } from "src/apis/banners/entities/banner.entity";
import { Topics } from "src/apis/topics/entities/topic.entity";
import { Court } from "src/apis/courts/entities/court.entity";
import { UpdateConfig } from "src/apis/update_config/entitis/update-config.entity";
import { User } from "src/apis/users/entities/user.entity";
import { Post } from "src/apis/posts/entities/post.entity";
import { Comment } from "src/apis/comments/entitis/comment.entity";
import { Region } from "src/apis/regions/entities/region.entity";

dotenv.config();

export default new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 6543,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  // entities: ["src/**/*.entity.ts"],
  entities: [Guestbook, Banner, UpdateConfig, User, Post, Comment, Region],
  migrations: ["src/database/migrations/*.ts"],
  migrationsTableName: "migrations",
});
