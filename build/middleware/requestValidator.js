"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
exports.default = (schema) => function (req, res, next) {
    const { reqBodyValidator, reqParamsValidator, reqQueryParamsValidator } = schema;
    try {
        if (reqBodyValidator) {
            const { error } = joi_1.default.object(reqBodyValidator).validate(req.body);
            if (error)
                throw error;
        }
        if (reqParamsValidator) {
            const { error } = joi_1.default.object(reqParamsValidator).validate(req.params);
            if (error)
                throw error;
        }
        if (reqQueryParamsValidator) {
            const { error } = joi_1.default.object(reqQueryParamsValidator).validate(req.query);
            if (error)
                throw error;
        }
        next();
    }
    catch (ex) {
        res.status(400).json({ error: ex.message });
    }
};
//# sourceMappingURL=requestValidator.js.map