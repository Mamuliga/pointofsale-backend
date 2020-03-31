import { Router } from "express";
import {
    getItemReceiving,
    createItemReceiving,
    getAllItemReceivings,
    //   updateItemStats,
    // deleteItemStats
} from "../models/ItemReceiving";
import { ItemReceivingShape } from "./apiShapes/ItemReceiving";
import {
    CREATE_ITEM_RECEIVING_REQUEST_BODY,
    //   UPDATE_CUSTOMER_REQUEST_BODY
} from "./validators/itemReceiving";
import requestValidator from "../middleware/requestValidator";

const itemReceivingRoute = Router();

itemReceivingRoute.get("/", async (req, res) => {
    try {
        const customers = await getAllItemReceivings();
        if (!customers.length) {
            res.status(204).json([]);
            return;
        }
        res.status(200).json(customers.map(customer => ItemReceivingShape(customer)));
    } catch (ex) {
        console.log(ex);
        res.status(res.statusCode || 400).json({
            error: ex.message
        });
    }
});

itemReceivingRoute.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const customer = await getItemReceiving(parseInt(id) || 0);
        if (!customer) res.status(204).json({});
        res.status(200).json(customer);
    } catch (ex) {
        console.log(ex);
        res.status(res.statusCode || 400).json({
            error: ex.message
        });
    }
});

itemReceivingRoute.post(
    "/",
    requestValidator({ reqBodyValidator: CREATE_ITEM_RECEIVING_REQUEST_BODY }),
    async (req, res) => {
        const { id } = req.params;
        try {
            const customer = await createItemReceiving(req.body);
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

export default itemReceivingRoute;
