import { Sequelize } from "sequelize-typescript";
//  import mysql from "mysql2";
import sqlite from "sqlite3";
import config from "../config";
import Person from "./Person";
import AppConfig from "./AppConfig";
import Supplier from "./Supplier";
import Customer from "./Customer";
import Employee from "./Employee";
import Item from "./Item";
import ItemStats from "./ItemStat";
import CashBook from "./CashBook";
import ItemSale from "./ItemSale";
import ItemReceiving from "./ItemReceiving";
import Receive from "./Receive";
import Sale from "./Sale";
import Due from "./Due";

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT } = config;

const sequelize = new Sequelize({
  // dialect: "mysql",
  dialect: "sqlite",
  storage: "./data.sqlite",
  host: DB_HOST,
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  dialectModule: sqlite,
  models: [Person, AppConfig, Customer, Supplier, Employee, Item, ItemStats, CashBook, ItemSale, ItemReceiving, Receive, Sale, Due]
});

export default sequelize;
