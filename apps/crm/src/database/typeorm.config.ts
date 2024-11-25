import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import dotenv from "dotenv";
import { User } from "../apis/user/entity/user.entity";
import { Club } from "../apis/club/entities/club.entity";

dotenv.config();

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.CRM_DB_HOST,
  port: parseInt(process.env.CRM_DB_PORT),
  username: process.env.CRM_DB_USERNAME,
  password: process.env.CRM_DB_PASSWORD,
  database: process.env.CRM_DB_DATABASE,
  entities: [User, Club],
  synchronize: false,
  migrations: [__dirname + "/migrations/*.ts"],
  keepConnectionAlive: true,
};
