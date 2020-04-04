import { Router } from "express";
import { ReceiveShape, ReceivesShape } from "./apiShapes/Receive";
import {
    getAllReceiving,
    getReceiving,
    createReceiving,
} from "../models/Receive";
import {
    CREATE_RECEIVE_REQUEST_BODY,
} from "./validators/receive";
import requestValidator from "../middleware/requestValidator";

const receiveRoute = Router();

receiveRoute.get("/", async (_req, res) => {
    try {
        const receivings = await getAllReceiving();
        if (!receivings.length) {
            res.status(204).json([]);
            return;
        }
        res.status(200).json(receivings.map(receiving => ReceivesShape(receiving)));
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
        const receive = await getReceiving(parseInt(id) || 0);
        if (!receive) res.status(204).json({});
        res.status(200).json(ReceiveShape(receive));
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
        try {
            const receive = await createReceiving(req.body);
            if (!receive) throw new Error("Unable to create the receive");
            res.status(201).json(receive);
        } catch (ex) {
            console.log(ex);
            res.status(res.statusCode || 400).json({
                error: ex.message
            });
        }
    }
);

export default receiveRoute;
