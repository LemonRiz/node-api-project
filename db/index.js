import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("todolist_db", $DB_USER, $DB_PW, {
  host: $DB_HOST,
  dialect: "mysql",
});
