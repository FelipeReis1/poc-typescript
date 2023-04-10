import { Request, Response } from "express";
import { TasksCreate } from "../protocols.js";
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

export default {
  create,
};
