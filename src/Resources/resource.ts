import { DataSource } from "typeorm";
import "reflect-metadata";
import * as dotenv from "dotenv";
import { User } from "../Entity/User";

dotenv.config();

export const UserData = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  database: process.env.DB,
  synchronize: true,
  entities: [User],
  insecureAuth: true,
});
