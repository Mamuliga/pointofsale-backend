import { Router } from "express";
import {
  getItemStats,
  createItemStats,
  getAllItemStats,
//   updateItemStats,
  deleteItemStats
} from "../models/ItemStat";
import { ItemStatsShape } from "./apiShapes/ItemStat";
import {
    CREATE_ITEM_STAT_REQUEST_BODY,
//   UPDATE_CUSTOMER_REQUEST_BODY
} from "./validators/itemStat";
import requestValidator from "../middleware/requestValidator";

const itemStatRoute = Router();

itemStatRoute.get("/", async (req, res) => {
  try {
    const itemStats = await getAllItemStats();
    if (!itemStats.length) {
      res.status(204).json([]);
      return;
    }
    res.status(200).json(itemStats.map(itemStat => ItemStatsShape(itemStat)));
  } catch (ex) {
    console.log(ex);
    res.status(res.statusCode || 400).json({
      error: ex.message
    });
  }
});

itemStatRoute.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await getItemStats(parseInt(id) || 0);
    if (!customer) res.status(204).json({});
    res.status(200).json(customer);
  } catch (ex) {
    console.log(ex);
    res.status(res.statusCode || 400).json({
      error: ex.message
    });
  }
});

itemStatRoute.post(
  "/",
  requestValidator({ reqBodyValidator: CREATE_ITEM_STAT_REQUEST_BODY }),
  async (req, res) => {
    const { id } = req.params;
    try {
      const customer = await createItemStats(req.body);
      if (!customer) throw new Error("Unable to create the Customer");
      res.status(201).json(customer);
    } catch (ex) {
      console.log(ex);
      res.status(res.statusCode || 400).json({
        error: ex.message
      });
    }
  }
);

// itemStats.put("/:id", async (req, res) => {
//   requestValidator({ reqBodyValidator: UPDATE_CUSTOMER_REQUEST_BODY });
//   const { id } = req.params;
//   try {
//     const customer = await updateCustomer(parseInt(id), req.body);
//     if (!customer) throw new Error("Unable to update the Customer");
//     res.status(204).json(customer);
//   } catch (ex) {
//     console.log(ex);
//     res.status(res.statusCode || 400).json({
//       error: ex.message
//     });
//   }
// });

itemStatRoute.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await deleteItemStats(parseInt(id));
    if (!customer) throw new Error("Unable to delete the Customer");
    res.status(201).json(customer);
  } catch (ex) {
    console.log(ex);
    res.status(res.statusCode || 400).json({
      error: ex.message
    });
  }
});

export default itemStatRoute;
