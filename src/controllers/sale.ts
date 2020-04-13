import { Router } from "express";
import {
  // getSale,
  getSingleSale,
  createSale,
  getAllSales,
} from "../models/Sale";
import { SaleShape, SalesShape, getASaleShape } from "./apiShapes/Sale";
import { CREATE_SALE_REQUEST_BODY } from "./validators/sale";
import requestValidator from "../middleware/requestValidator";
import { createItemSale } from "../models/ItemSale";
import { ItemSaleShape } from "./apiShapes/ItemSale";
import { createCashbookEntry } from "../models/Cashbook";
import ItemStats from "../db/ItemStat";
import Sequelize from "sequelize";

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

// saleRoute.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const sale = await getSale(parseInt(id) || 0);
//     if (!sale) res.status(204).json({});
//     res.status(200).json(SaleShape(sale));
//   } catch (ex) {
//     console.log(ex);
//     res.status(res.statusCode || 400).json({
//       error: ex.message
//     });
//   }
// });

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

const getItemSaleRequest = (saleRequest: any, {id}:any) => {
  const { itemId, sellingPrice, discount, quantity, description } = saleRequest;
  return {
    saleId:id,
    itemId,
    sellingPrice,
    discount,
    quantity,
    description,
  }
}
const handleItemSaleOnSale = (itemSales:any, sale:any) => {
  itemSales.forEach(async (itemSale: any, res:any)=>{
    try {
      const itemSaleResult = await createItemSale(getItemSaleRequest(itemSale, sale.toJSON()));
      if (!itemSaleResult){
        throw new Error("Unable to create the  item sale");
      }
      // res.status(201).json(itemSaleResult)
    } catch (ex) {
      console.log(ex);
      res.status(res.statusCode || 400).json({
        error: ex.message
      });
    }
  })
}

const handleCashBookOnSale = async (cashBookDetails:any) => {
  if(cashBookDetails.type === "cash"){
    try {
      const cashBookResult = await createCashbookEntry(cashBookDetails);
      if (!cashBookResult){
        throw new Error("Unable to create cashbook entry on sale");
      }
      // res.status(201).json(itemSaleResult)
    } catch (ex) {
      console.log(ex);
      // res.status(res.statusCode || 400).json({
      //   error: ex.message
      // });
    }
  }
}

const handleItemStatOnSale = async (itemSales:any) => {
  itemSales.forEach((itemSale: { quantity: number; itemId: number; })=>{
    ItemStats.update({
      quantity: Sequelize.literal(`quantity - ${itemSale.quantity}`)
    }, {
      where: {
        itemId:itemSale.itemId,
      }
    });
  })

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
