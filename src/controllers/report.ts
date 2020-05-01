import { Router } from "express";
import { getNetProfit } from "../models/report";

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

export default reportRoute;
