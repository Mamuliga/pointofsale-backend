import { Sequelize } from "sequelize-typescript";
import mysql from "mysql2";
import config from "../config";
import Person from "./Person";
import AppConfig from "./AppConfig";
import Supplier from "./Supplier";
import Customer from "./Customer";
import Employee from "./Employee";

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT } = config;

const sequelize = new Sequelize({
  dialect: "mysql",
  host: DB_HOST,
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  dialectModule: mysql,
  models: [Person, AppConfig, Supplier, Customer, Employee]
});

export default sequelize;
