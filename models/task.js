import { Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

export const Task = sequelize.define(
  //
  "task",
  {
    // SETTING UP COLUMNS
    // - PRIMARY KEY
    // - COLUMN TYPES
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    chore: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    priority: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    created_by: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  // RENAMING THE AUTO GENERATED COLUMNS
  {
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);
