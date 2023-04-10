import db from "../config/database.js";
import { QueryResult } from "pg";
import { TasksComplete, TasksCreate, TasksResponsible } from "../protocols.js";

async function findTaskByName(name: string): Promise<QueryResult> {
  return await db.query(`SELECT * FROM tasks WHERE name = $1`, [name]);
}
async function findTaskById(id: number): Promise<QueryResult> {
  return await db.query(`SELECT * FROM tasks WHERE id = $1`, [id]);
}

async function create(task: TasksCreate): Promise<void> {
  await db.query(
    `INSERT INTO tasks (name, description, day, responsible) VALUES ($1, $2, $3, $4)`,
    [task.name, task.description, task.day, task.responsible]
  );
}

async function completeTask(task: TasksComplete, id: number): Promise<void> {
  await db.query(`UPDATE tasks SET status = $1 WHERE id =$2`, [
    task.status,
    id,
  ]);
}
async function getTasks(responsible: string): Promise<QueryResult> {
  const result = await db.query(`SELECT * FROM tasks WHERE responsible = $1`, [
    responsible,
  ]);
  return result;
}

export default {
  findTaskByName,
  findTaskById,
  create,
  completeTask,
  getTasks,
};
