"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Employee_1 = require("../models/Employee");
const employee_1 = require("./validators/employee");
const requestValidator_1 = __importDefault(require("../middleware/requestValidator"));
const employeeRoute = express_1.Router();
employeeRoute.get("/admins", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const AdminEmployees = yield Employee_1.getAdminEmployees();
        if (!AdminEmployees.length)
            res.status(204).json([]);
        res.status(200).json(AdminEmployees);
    }
    catch (ex) {
        console.log(ex);
        res.status(res.statusCode || 400).json({
            error: ex.message
        });
    }
}));
employeeRoute.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const employee = yield Employee_1.getEmployee(parseInt(id) || 0);
        if (!employee)
            res.status(204).json({});
        res.status(200).json(employee);
    }
    catch (ex) {
        console.log(ex);
        res.status(res.statusCode || 400).json({
            error: ex.message
        });
    }
}));
employeeRoute.post("/", requestValidator_1.default({ reqBodyValidator: employee_1.CREATE_EMPLOYEE_REQUEST_BODY }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const employee = yield Employee_1.createEmployee(req.body);
        if (!employee)
            throw new Error("Unable to create the Employee");
        res.status(201).json(employee);
    }
    catch (ex) {
        console.log(ex);
        res.status(res.statusCode || 400).json({
            error: ex.message
        });
    }
}));
exports.default = employeeRoute;
//# sourceMappingURL=employee.js.map