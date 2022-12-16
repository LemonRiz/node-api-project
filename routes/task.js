import Router from "express";

import { readFileSync, writeFileSync } from "fs";

import {
  getTasks,
  addTasks,
  singleTask,
  deleteTask,
  updateTaskById,
} from "../controllers/task.js";

const router = Router();

router.get("/", getTasks);

router.get("/:id", singleTask);

router.delete("/:id", deleteTask);

router.post("/", addTasks);

router.put("/:id", updateTaskById);

export default router;
