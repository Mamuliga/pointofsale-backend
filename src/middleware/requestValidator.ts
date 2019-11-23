import { Request, Response, NextFunction } from "express";
import Joi from "@hapi/joi";

export default (reqBodyValidator: any, reqParamsValidator?: any) =>
  function(req: Request, res: Response, next: NextFunction) {
    try {
      const { error } = Joi.object(reqBodyValidator).validate(req.body);
      if (error) throw error;
      next();
    } catch (ex) {
      res.status(400).json({ error: ex.message });
    }
  };
