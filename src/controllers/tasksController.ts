import { Request, Response } from "express";
import { TasksComplete, TasksCreate, TasksResponsible } from "../protocols.js";
import tasksServices from "../services/tasksServices.js";

async function create(req: Request, res: Response) {
  const { name, description, day, responsible } = req.body as TasksCreate;
  try {
    await tasksServices.create({ name, description, day, responsible });
    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function completeTask(req: Request, res: Response) {
  const { id } = req.params;
  const { status } = req.body as TasksComplete;
  try {
    await tasksServices.completeTask({ status }, Number(id));
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getTasks(req: Request, res: Response) {
  const { responsible } = req.body as TasksResponsible;
  try {
    const result = await tasksServices.getTasks(responsible);

    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteTask(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await tasksServices.deleteTask(Number(id));
    return res.status(200);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export default {
  create,
  completeTask,
  getTasks,
  deleteTask,
};
