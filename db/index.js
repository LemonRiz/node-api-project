import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "todolist_db",
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: "127.0.0.1",
    dialect: "mysql",
  }
);
