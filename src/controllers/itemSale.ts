import { Router } from "express";
import {
    getItemSales,
    createItemSale,
    getAllItemSales,
    //   updateItemStats,
    // deleteItemStats
} from "../models/ItemSale";
import { ItemSaleShape } from "./apiShapes/ItemSale";
import {
    CREATE_ITEM_SALE_REQUEST_BODY,
    //   UPDATE_CUSTOMER_REQUEST_BODY
} from "./validators/itemSale";
import requestValidator from "../middleware/requestValidator";

const itemSale = Router();

itemSale.get("/", async (req, res) => {
    try {
        const customers = await getAllItemSales();
        if (!customers.length) {
            res.status(204).json([]);
            return;
        }
        res.status(200).json(customers.map(customer => ItemSaleShape(customer)));
    } catch (ex) {
        console.log(ex);
        res.status(res.statusCode || 400).json({
            error: ex.message
        });
    }
});

itemSale.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const customer = await getItemSales(parseInt(id) || 0);
        if (!customer) res.status(204).json({});
        res.status(200).json(customer);
    } catch (ex) {
        console.log(ex);
        res.status(res.statusCode || 400).json({
            error: ex.message
        });
    }
});

itemSale.post(
    "/",
    requestValidator({ reqBodyValidator: CREATE_ITEM_SALE_REQUEST_BODY }),
    async (req, res) => {
        const { id } = req.params;
        try {
            const customer = await createItemSale(req.body);
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

// itemStats.delete("/:id", async (req, res) => {
//     const { id } = req.params;
//     try {
//         const customer = await deleteItemStats(parseInt(id));
//         if (!customer) throw new Error("Unable to delete the Customer");
//         res.status(201).json(customer);
//     } catch (ex) {
//         console.log(ex);
//         res.status(res.statusCode || 400).json({
//             error: ex.message
//         });
//     }
// });

export default itemSale;
