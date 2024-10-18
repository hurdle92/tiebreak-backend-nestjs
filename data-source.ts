import dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config();

export default new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 6543,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  entities: ["src/**/*.entity.ts"],
  migrations: ["src/database/migrations/*.ts"],
  migrationsTableName: "migrations",
});
