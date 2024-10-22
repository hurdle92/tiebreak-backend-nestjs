import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import dotenv from "dotenv";

dotenv.config();

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: 6543,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: false,
  migrations: [__dirname + "/migrations/*.ts"],
  keepConnectionAlive: true,
};
