import db from "../config/database.js";
import { QueryResult } from "pg";
import { TasksCreate } from "../protocols.js";

async function findTaskByName(name: string): Promise<QueryResult> {
  return await db.query(`SELECT * FROM tasks WHERE name = $1`, [name]);
}

async function create(task: TasksCreate): Promise<void> {
  await db.query(
    `INSERT INTO tasks (name, description, day, responsible) VALUES ($1, $2, $3, $4)`,
    [task.name, task.description, task.day, task.responsible]
  );
}

export default {
  findTaskByName,
  create,
};
