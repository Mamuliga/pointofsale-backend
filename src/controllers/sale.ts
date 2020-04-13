import { Router } from "express";
import {
  createSale,
  getAllSales,
  getSale,
  handleItemSaleOnSale,
  handleCashBookOnSale,
  handleItemStatOnSale,
} from "../models/Sale";
import { SalesShape, SaleShape } from "./apiShapes/Sale";
import { CREATE_SALE_REQUEST_BODY } from "./validators/sale";
import requestValidator from "../middleware/requestValidator";

const saleRoute = Router();

saleRoute.get("/", async (req, res) => {
  try {
    const sales = await getAllSales(req.body);
    if (!sales.length) {
      res.status(204).json([]);
      return;
    }
    res.status(200).json(sales.map(sale => SalesShape(sale)));
  } catch (ex) {
    console.log(ex);
    res.status(res.statusCode || 400).json({
      error: ex.message
    });
  }
});

saleRoute.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const sale = await getSale(parseInt(id) || 0);
    if (!sale) res.status(204).json({});
    res.status(200).json(SaleShape(sale));
  } catch (ex) {
    console.log(ex);
    res.status(res.statusCode || 400).json({
      error: ex.message
    });
  }
});

saleRoute.post(
  "/",
  requestValidator({ reqBodyValidator: CREATE_SALE_REQUEST_BODY }),
  async (req, res) => {
    // add Sequelize.transaction(t => {
    try {
      const sale = await createSale(req.body);
      if (!sale) {
        throw new Error("Unable to create the sale");
      } else {
        res.status(201).json(sale);
        handleItemSaleOnSale(req.body.itemSales, sale);
        handleCashBookOnSale(req.body.cashBookDetails);
        handleItemStatOnSale(req.body.itemSales);
      }
    } catch (ex) {
      console.log(ex);
      res.status(res.statusCode || 400).json({
        error: ex.message
      });
    }
  }
);

export default saleRoute;
