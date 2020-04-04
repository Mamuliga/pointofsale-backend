import { Router } from "express";
import {
    getItemSales,
    createItemSale,
    getAllItemSales,
} from "../models/ItemSale";
import { ItemSaleShape } from "./apiShapes/ItemSale";
import {   CREATE_ITEM_SALE_REQUEST_BODY } from "./validators/itemSale";
import requestValidator from "../middleware/requestValidator";

const itemSaleRoute = Router();

itemSaleRoute.get("/", async (_req, res) => {
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

itemSaleRoute.get("/:id", async (req, res) => {
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

itemSaleRoute.post(
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

export default itemSaleRoute;
