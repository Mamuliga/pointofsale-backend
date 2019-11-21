import { Router } from "express";
import authRouter from "./auth";

const apiRoute = Router();

apiRoute.use("/auth", authRouter);

export default apiRoute;
