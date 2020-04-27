import { Router } from "express";
import { getNetProfit } from "../models/report";

const reportRoute = Router();

reportRoute.get("/", async (req, res) => {
  try {
    const netProfit = await getNetProfit(req.query);
    if (!netProfit) {
      res.status(204).json("No Profit for given period!");
      return;
    }
    res.status(200).json(`Net Profit for the period is ${netProfit}`);
  } catch (ex) {
    console.log(ex);
    res.status(res.statusCode || 400).json({
      error: ex.message,
    });
  }
});

export default reportRoute;
