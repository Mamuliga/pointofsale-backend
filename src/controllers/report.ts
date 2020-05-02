import { Router } from "express";
import { getNetProfit, getDailySales } from "../models/report";
import { SalesShape } from "./apiShapes/Report";

const reportRoute = Router();

reportRoute.get("/", async (req, res) => {
  try {
    const profitForPeriod = await getNetProfit(req.query);

    if (!profitForPeriod) {
      res.status(204).json({});
      return;
    }
    res.status(200).json({
      noOfItemSales: profitForPeriod[0],
      netProfit: profitForPeriod[1],
      startDate: profitForPeriod[2],
      endDate: profitForPeriod[3],
    });
  } catch (ex) {
    console.log(ex);
    res.status(res.statusCode || 400).json({
      error: ex.message,
    });
  }
});

reportRoute.get("/dailySales", async (req, res) => {
  try {
    const dailySales = await getDailySales(req.query);

    if (!dailySales) {
      res.status(204).json({});
      return;
    }
    res.status(200).json(SalesShape(dailySales));
  } catch (ex) {
    console.log(ex);
    res.status(res.statusCode || 400).json({
      error: ex.message,
    });
  }
});

export default reportRoute;
// 2020-04-24T11:23:01.520Z
