import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers["authorization"];
  let jwtPayload;

  try {
    jwtPayload = <any>jwt.verify(token, config.JWT_SECRET);
    res.locals.jwtPayload = jwtPayload;
    next();
  } catch (error) {
    res.status(401).json({
      error: error.message
    });
    return;
  }
};
