import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Guestbook } from "src/apis/guestbook/entities/guestbook.entity";
import { Banners } from "src/apis/banners/entities/banner.entity";

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
  entities: [Guestbook, Banners],
  migrations: ["src/database/migrations/*.ts"],
  migrationsTableName: "migrations",
});
