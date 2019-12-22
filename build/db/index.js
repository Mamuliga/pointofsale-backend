"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const mysql2_1 = __importDefault(require("mysql2"));
const config_1 = __importDefault(require("../config"));
const Person_1 = __importDefault(require("./Person"));
const AppConfig_1 = __importDefault(require("./AppConfig"));
const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT } = config_1.default;
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: DB_HOST,
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    dialectModule: mysql2_1.default,
    models: [Person_1.default, AppConfig_1.default]
});
exports.default = sequelize;
//# sourceMappingURL=index.js.map