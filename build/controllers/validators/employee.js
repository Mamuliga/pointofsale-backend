"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
exports.CREATE_EMPLOYEE_REQUEST_BODY = {
    firstName: joi_1.default.string().required(),
    lastName: joi_1.default.string().required(),
    isAdmin: joi_1.default.boolean().optional()
};
//# sourceMappingURL=employee.js.map