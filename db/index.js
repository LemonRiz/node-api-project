import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("todolist_db", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});
