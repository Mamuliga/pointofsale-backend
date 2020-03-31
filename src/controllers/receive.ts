import { Router } from "express";
import { ReceiveShape } from "./apiShapes/Receive";
import {
    getAllReceiving,
    getReceiving,
    createReceiving,
    //   updateItem,
    //   deleteItem
} from "../models/Receive";
import {
    CREATE_RECEIVE_REQUEST_BODY,
    //   UPDATE_ITEM_REQUEST_BODY
} from "./validators/receive";
import requestValidator from "../middleware/requestValidator";

const receiveRoute = Router();

receiveRoute.get("/", async (req, res) => {
    try {
        const receivings = await getAllReceiving();
        if (!receivings.length) {
            res.status(204).json([]);
            return;
        }
        res.status(200).json(receivings.map(receiving => ReceiveShape(receiving)));
    } catch (ex) {
        console.log(ex);
        res.status(res.statusCode || 400).json({
            error: ex.message
        });
    }
});

receiveRoute.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const item = await getReceiving(parseInt(id) || 0);
        if (!item) res.status(204).json({});
        res.status(200).json(ReceiveShape(item));
    } catch (ex) {
        console.log(ex);
        res.status(res.statusCode || 400).json({
            error: ex.message
        });
    }
});

receiveRoute.post(
    "/",
    requestValidator({ reqBodyValidator: CREATE_RECEIVE_REQUEST_BODY }),
    async (req, res) => {
        const { id } = req.params;
        try {
            const item = await createReceiving(req.body);
            if (!item) throw new Error("Unable to create the item");
            res.status(201).json(item);
        } catch (ex) {
            console.log(ex);
            res.status(res.statusCode || 400).json({
                error: ex.message
            });
        }
    }
);

// itemRoute.puts("/:id", async (req, res) => {
//   requestValidator({ reqBodyValidator: UPDATE_ITEM_REQUEST_BODY });
//   const { id } = req.params;
//   try {
//     const item = await updateItem(parseInt(id), req.body);
//     if (!item) throw new Error("Unable to update the item");
//     res.status(201).json(item);
//   } catch (ex) {
//     console.log(ex);
//     res.status(res.statusCode || 400).json({
//       error: ex.message
//     });
//   }
// });

// receiveRoute.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const item = await deleteItem(parseInt(id));
//     if (!item) throw new Error("Unable to delete the item");
//     res.status(201).json(item);
//   } catch (ex) {
//     console.log(ex);
//     res.status(res.statusCode || 400).json({
//       error: ex.message
//     });
//   }
// });

export default receiveRoute;
