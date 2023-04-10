import Joi from "joi";
import { TasksCreate } from "../protocols.js";

export const tasksSchema = Joi.object<TasksCreate>({
  name: Joi.string().required(),
  description: Joi.string().required(),
  day: Joi.string().required(),
  responsible: Joi.string().required(),
});
