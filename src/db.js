import pg from "pg";
import { DATABASE, DBPORT, HOST, PASSWORD, USER } from "./config.js";

export const pool = new pg.Pool({
  user: USER,
  host: HOST,
  database: DATABASE,
  password: PASSWORD,
  port: DBPORT,
});
