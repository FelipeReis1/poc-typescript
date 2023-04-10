import { Router } from "express";
import tasksController from "../controllers/tasksController.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { tasksSchema } from "../schemas/tasksSchema.js";

const routes = Router();

routes.post("/tasks", validateSchema(tasksSchema), tasksController.create);
routes.put("/tasks/:id", tasksController.completeTask);
routes.delete("/tasks/:id", tasksController.deleteTask);
routes.get("/tasks", tasksController.getTasks);

export default routes;
