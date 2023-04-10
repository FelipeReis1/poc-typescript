import pg from "pg";
import dotenv from "dotenv";
import chalk from "chalk";
dotenv.config();

const { Pool } = pg;

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
});

console.log(chalk.bold.yellow(process.env.DATABASE_URL));

db.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error(chalk.bold.red("Could not connect to database: ", err));
  } else {
    console.log(chalk.bold.green("Database connected!"));
  }
});

export default db;
