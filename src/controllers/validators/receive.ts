import Joi from "@hapi/joi";

export const CREATE_RECEIVE_REQUEST_BODY = {
  itemId: Joi.number(),
  supplierId: Joi.number(),
  total: Joi.number(),
  totalDiscount: Joi.number(),
  paymentType: Joi.string(),
  payedAmount: Joi.number(),
  balance: Joi.number(),
};