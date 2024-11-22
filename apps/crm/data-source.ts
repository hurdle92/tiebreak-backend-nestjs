import dotenv from "dotenv";
import { DataSource } from "typeorm";
import path from "path";
import { User } from "./src/apis/user/entity/user.entity";

dotenv.config();

export default new DataSource({
  type: "postgres",
  host: process.env.CRM_DB_HOST,
  port: parseInt(process.env.CRM_DB_PORT),
  username: process.env.CRM_DB_USERNAME,
  password: process.env.CRM_DB_PASSWORD,
  database: process.env.CRM_DB_DATABASE,
  synchronize: false,
  entities: [User],
  migrations: [path.resolve(__dirname, "src/database/migrations/*{.ts,.js}")],
  migrationsTableName: "migrations",
});
