import { Router } from "express";
import authRouter from "./auth";
import employeeRoute from "./employee";

const apiRoute = Router();

apiRoute.use("/auth", authRouter);
apiRoute.use("/employees", employeeRoute);

export default apiRoute;
