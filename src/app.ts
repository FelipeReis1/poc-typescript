import cors from "cors";
import express, { json } from "express";
import chalk from "chalk";
import dotenv from "dotenv";
import routes from "./routers/index.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(json());
app.use(cors());
app.use(routes);

app.listen(PORT, () =>
  console.log(chalk.bold.blue(`Server running on port: ${PORT}`))
);
