import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import dotenv from "dotenv";
import { User } from "../apis/user/entity/user.entity";
import { Club } from "../apis/club/entities/club.entity";
import { Meeting } from "../apis/meeting/entities/meeting.entity";
import { Court } from "../apis/court/entities/court.entity";
import { MeetingCourtBridge } from "../apis/meeting/entities/meeting-court-bridge/meeting-court-bridge.entity";
import { Match } from "../apis/match/entities/match.entity";

dotenv.config();

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.CRM_DB_HOST,
  port: parseInt(process.env.CRM_DB_PORT),
  username: process.env.CRM_DB_USERNAME,
  password: process.env.CRM_DB_PASSWORD,
  database: process.env.CRM_DB_DATABASE,
  entities: [User, Club, Court, Meeting, MeetingCourtBridge, Match],
  synchronize: false,
  migrations: [__dirname + "/migrations/*.ts"],
  keepConnectionAlive: true,
  parseInt8: true,
};
