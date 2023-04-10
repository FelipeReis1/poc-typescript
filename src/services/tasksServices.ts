import { TasksComplete, TasksCreate } from "../protocols.js";
import tasksRepositories from "../repositories/tasksRepositories.js";

async function create(task: TasksCreate): Promise<void> {
  const { rowCount } = await tasksRepositories.findTaskByName(task.name);
  if (rowCount) throw new Error("Task already registered");

  await tasksRepositories.create(task);
}

async function completeTask(task: TasksComplete, id: number): Promise<void> {
  await tasksRepositories.completeTask(task, id);
}

async function getTasks(responsible: string): Promise<any> {
  const { rows: responsibleTask, rowCount } = await tasksRepositories.getTasks(
    responsible
  );
  if (!rowCount) throw new Error("Responsible not found");
  return responsibleTask;
}

async function deleteTask(id: number): Promise<void> {
  const { rowCount } = await tasksRepositories.findTaskById(id);
  if (!rowCount) throw new Error("Task not found");
  await deleteTask(id);
  return;
}

export default {
  create,
  completeTask,
  getTasks,
  deleteTask,
};
