"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const employee_1 = __importDefault(require("./employee"));
const apiRoute = express_1.Router();
apiRoute.use("/auth", auth_1.default);
apiRoute.use("/employees", employee_1.default);
exports.default = apiRoute;
//# sourceMappingURL=index.js.map