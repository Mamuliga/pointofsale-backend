import sequelize from "../db";
import { Request, Response, NextFunction } from "express";

export default async function(req: Request, res: Response, next: NextFunction) {
  try {
    await sequelize.sync();
    next();
  } catch (ex) {
    res.status(500).json({
      error: "Unable to connect Database"
    });
  }
}
