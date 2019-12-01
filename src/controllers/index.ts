import { Router } from "express";
import authRouter from "./auth";
import employeeRoute from "./employee";
import mockRouter from "./mock"
const apiRoute = Router();

apiRoute.use("/auth", authRouter);
apiRoute.use("/employees", employeeRoute);
apiRoute.use("/mock",mockRouter);
export default apiRoute;
