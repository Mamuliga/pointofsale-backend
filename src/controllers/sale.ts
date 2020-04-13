import { Router } from "express";
import {
  getSingleSale,
  createSale,
  getAllSales,
} from "../models/Sale";
import {  SalesShape, getASaleShape } from "./apiShapes/Sale";
import { CREATE_SALE_REQUEST_BODY } from "./validators/sale";
import requestValidator from "../middleware/requestValidator";
import ItemStats from "../db/ItemStat";
import Sequelize from "sequelize";
import CashBook from "../db/CashBook";
import ItemSale from "../db/ItemSale";

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
    const sale = await getSingleSale(parseInt(id) || 0);
    if (!sale) res.status(204).json({});
    res.status(200).json(getASaleShape(sale));
  } catch (ex) {
    console.log(ex);
    res.status(res.statusCode || 400).json({
      error: ex.message
    });
  }
});

const handleItemSaleOnSale = (itemSales:any, sale:any) => {
  itemSales.forEach((itemSale: any)=>{
    try {
      const { itemId, sellingPrice, discount, quantity, description } = itemSale;
      const itemSaleDetails = {
        saleId:sale.toJSON().id,
        itemId,
        sellingPrice,
        discount,
        quantity,
        description,
      }
      const itemSaleResult = ItemSale.create(itemSaleDetails);
      if (!itemSaleResult){
        throw new Error("Unable to create the  item sale");
      }
    } catch (ex) {
      console.log(ex);
    }
  })
}

const handleCashBookOnSale = async (cashBookDetails:any) => {
  if(cashBookDetails.type === "cash"){
    try {
      const cashBookResult = CashBook.create(cashBookDetails);
      if (!cashBookResult){
        throw new Error("Unable to create cashbook entry on sale");
      }
    } catch (ex) {
      console.log(ex);
    }
  }
}

const handleItemStatOnSale = async (itemSales:any) => {
  try{
    itemSales.forEach((itemSale: { quantity: number; itemId: number; })=>{
      ItemStats.update({
        quantity: Sequelize.literal(`quantity - ${itemSale.quantity}`)
      }, {
        where: {
          itemId:itemSale.itemId,
        }
      });
    })
  } catch (ex) {
    console.log(ex);
  }
}


saleRoute.post(
  "/",
  requestValidator({ reqBodyValidator: CREATE_SALE_REQUEST_BODY }),
  async (req, res) => {
    try {
      const sale = await createSale(req.body);
      if (!sale){
        throw new Error("Unable to create the sale");
      } else{
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
