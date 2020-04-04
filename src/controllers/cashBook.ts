import { Router } from "express";
import { CashbookShape } from "./apiShapes/CashBook";
import {
   getAllCashBookEntries,
  getCashBookEntry,
  createCashbookEntry,
} from "../models/Cashbook";
import { CREATE_CAHSBOOK_REQUEST_BODY } from "./validators/cashBook";
import requestValidator from "../middleware/requestValidator";

const cashBookRoute = Router();

cashBookRoute.get("/", async (_req, res) => {
  try {
    const entries = await getAllCashBookEntries();
    if (!entries.length) {
      res.status(204).json([]);
      return;
    }
    res.status(200).json(entries.map((entry: any) => CashbookShape(entry)));
  } catch (ex) {
    console.log(ex);
    res.status(res.statusCode || 400).json({
      error: ex.message
    });
  }
});

cashBookRoute.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const entry = await getCashBookEntry(parseInt(id) || 0);
    if (!entry) res.status(204).json({});
    res.status(200).json(CashbookShape(entry));
  } catch (ex) {
    console.log(ex);
    res.status(res.statusCode || 400).json({
      error: ex.message
    });
  }
});

cashBookRoute.post(
  "/",
  requestValidator({ reqBodyValidator: CREATE_CAHSBOOK_REQUEST_BODY }),
  async (req, res) => {
    try {
      const entry = await createCashbookEntry(req.body);
      if (!entry) throw new Error("Unable to create the cashbook entry");
      res.status(201).json(entry);
    } catch (ex) {
      console.log(ex);
      res.status(res.statusCode || 400).json({
        error: ex.message
      });
    }
  }
);

export default cashBookRoute;
