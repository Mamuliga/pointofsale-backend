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
import itemStatRoute from "./itemStat";
import cashBookRoute from "./cashBook";
import itemReceivingRoute from "./itemReceiving";
import itemSaleRoute from "./itemSale";
import receiveRoute from "./receive";
import saleRoute from "./sale";
import reportRoute from "./report";
import settingsRoute from "./settings";

const apiRoute = Router();

apiRoute.use("/auth", authRouter);
apiRoute.use("/features", validateJwt, featureRoute);
apiRoute.use("/employees", employeeRoute);
apiRoute.use("/customers", validateJwt, customerRoute);
apiRoute.use("/suppliers", validateJwt, supplierRoute);
apiRoute.use("/items", validateJwt, itemRoute);
apiRoute.use("/mock", mockRouter);
apiRoute.use("/appSettings", validateJwt, appConfig);
apiRoute.use("/itemStats", validateJwt, itemStatRoute);
apiRoute.use("/cashBooks", validateJwt, cashBookRoute);
apiRoute.use("/itemReceivings", validateJwt, itemReceivingRoute);
apiRoute.use("/itemSales", validateJwt, itemSaleRoute);
apiRoute.use("/receives", validateJwt, receiveRoute);
apiRoute.use("/sales", validateJwt, saleRoute);
apiRoute.use("/report", reportRoute);
apiRoute.use("/settings", validateJwt, settingsRoute);

export default apiRoute;
