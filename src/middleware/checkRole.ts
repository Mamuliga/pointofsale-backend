import { Request, Response, NextFunction } from "express";

import Employee from "./../db/Employee";

import { EMPLOYEE_ROLES } from "../utilities/constant";

export const checkRole = (role: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const id = res.locals.jwtPayload.id;

    const employee = await Employee.findByPk(id);
    const role = employee?.roleInPOS;

    try {
      const employee = await Employee.findOne(id);
    } catch (id) {
      res.status(401).send();
    }

    if (role == "admin" || "cashier") next();
    else res.status(401).send();
  };
};
