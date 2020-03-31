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

const apiRoute = Router();

apiRoute.use("/auth", authRouter);
apiRoute.use("/features", featureRoute);
apiRoute.use("/employees", validateJwt, employeeRoute);
apiRoute.use("/customers", customerRoute);
apiRoute.use("/suppliers", supplierRoute);
apiRoute.use("/items", itemRoute);
apiRoute.use("/mock", mockRouter);
apiRoute.use("/appSettings", appConfig);
apiRoute.use("/itemStat", itemStatRoute);
apiRoute.use("/cashBook", cashBookRoute);
apiRoute.use("/itemReceiving", itemReceivingRoute);
apiRoute.use("/itemSale", itemSaleRoute);
apiRoute.use("/receive", receiveRoute);
apiRoute.use("/sale", saleRoute);

export default apiRoute;
