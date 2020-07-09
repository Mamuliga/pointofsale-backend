import { Router } from 'express';
import { ReceiveShape, ReceivesShape } from './apiShapes/Receive';
import {
  getAllReceivings,
  getReceiving,
  createReceiving,
  handleItemReceiveOnReceive,
  handleCashBookOnReceive,
  handleItemStatOnReceive,
} from '../models/Receive';
import { CREATE_RECEIVE_REQUEST_BODY } from './validators/receive';
import requestValidator from '../middleware/requestValidator';

const receiveRoute = Router();

receiveRoute.get('/', async (req, res) => {
  try {
    const receivings = await getAllReceivings(req.body);
    if (!receivings.length) {
      res.status(204).json([]);
      return;
    }
    res.status(200).json(ReceivesShape(receivings));
  } catch (ex) {
    console.log(ex);
    res.status(res.statusCode || 400).json({
      error: ex.message,
    });
  }
});

receiveRoute.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const receive = await getReceiving(parseInt(id) || 0);
    if (!receive) res.status(204).json({});
    res.status(200).json(ReceiveShape(receive));
  } catch (ex) {
    console.log(ex);
    res.status(res.statusCode || 400).json({
      error: ex.message,
    });
  }
});

receiveRoute.post(
  '/',
  requestValidator({ reqBodyValidator: CREATE_RECEIVE_REQUEST_BODY }),
  async (req, res) => {
    try {
      const receive = await createReceiving(req.body);
      if (!receive) {
        throw new Error('Unable to create the receive');
      } else {
        const { total } =  req.body;
        const itemReceivesArray: { itemId: any; supplierId: any; costPrice: any; salesPrice: any; expDate: any; manuDate: any; quantity: any;  }[] = [];
        req.body.itemReceives.forEach((receiveItem: any) => {
          const { itemId, supplierId, receivePrice, salesPrice, expDate, manuDate, quantity } = receiveItem;
          const costPrice = receivePrice;
          itemReceivesArray.push({ itemId, supplierId, costPrice, salesPrice, expDate, manuDate, quantity })
        })

        res.status(201).json(receive);
        await handleItemReceiveOnReceive(req.body.itemReceives, receive);
        await handleCashBookOnReceive(total, receive);
        await handleItemStatOnReceive(itemReceivesArray);
      }
    } catch (ex) {
      console.log(ex);
      res.status(res.statusCode || 400).json({
        error: ex.message,
      });
    }
  }
);

export default receiveRoute;
