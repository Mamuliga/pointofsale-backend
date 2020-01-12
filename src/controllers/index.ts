import { Router } from "express";
import authRouter from "./auth";
import employeeRoute from "./employee";
import mockRouter from "./mock";
import customerRoute from "./customer";
import supplierRoute from "./supplier";
import featureRoute from "./featureConfig";
const apiRoute = Router();

apiRoute.use("/auth", authRouter);
apiRoute.use("/features", featureRoute);
apiRoute.use("/employees", employeeRoute);
apiRoute.use("/customers", customerRoute);
apiRoute.use("/suppliers", supplierRoute);
apiRoute.use("/mock", mockRouter);
export default apiRoute;
