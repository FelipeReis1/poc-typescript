import { Tasks, TasksCreate } from "../protocols.js";
import tasksRepositories from "../repositories/tasksRepositories.js";

async function create(task: TasksCreate): Promise<void> {
  const { rowCount } = await tasksRepositories.findTaskByName(task.name);
  if (rowCount) throw new Error("Task already registered");

  await tasksRepositories.create(task);
}

export default {
  create,
};
