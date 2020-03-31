import { Router } from "express";
import authRouter from "./auth";
import employeeRoute from "./employee";
import mockRouter from "./mock";
import customerRoute from "./customer";
import supplierRoute from "./supplier";
import itemRoute from "./item";
import featureRoute from "./featureConfig";
import appConfig from "./appConfig";
import validateJwt from "../middleware/validateJwt";
import itemStats from "./itemStats";

const apiRoute = Router();

apiRoute.use("/auth", authRouter);
apiRoute.use("/features", featureRoute);
apiRoute.use("/employees", validateJwt, employeeRoute);
apiRoute.use("/customers", customerRoute);
apiRoute.use("/suppliers", supplierRoute);
apiRoute.use("/items", itemRoute);
apiRoute.use("/mock", mockRouter);
apiRoute.use("/appSettings", appConfig);
apiRoute.use("/itemStats", itemStats);
export default apiRoute;
