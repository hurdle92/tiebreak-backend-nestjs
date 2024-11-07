import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Guestbook } from "src/apis/guestbook/entities/guestbook.entity";
import { Banner } from "src/apis/banners/entities/banner.entity";
import { Topics } from "src/apis/topics/entities/topic.entity";
import { Court } from "src/apis/courts/entities/court.entity";
import { UpdateConfig } from "src/apis/update_config/entitis/update-config.entity";

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
  entities: [Guestbook, Banner, UpdateConfig],
  migrations: ["src/database/migrations/*.ts"],
  migrationsTableName: "migrations",
});
