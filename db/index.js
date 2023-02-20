import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  "todolist_db",
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: process.env.HOST,
    dialect: "mysql",
  }
);
