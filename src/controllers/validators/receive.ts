import Joi from "@hapi/joi";

export const CREATE_RECEIVE_REQUEST_BODY = {
  itemId: Joi.string(),
  supplier: Joi.string(),
  total: Joi.string(),
  totalDiscount: Joi.string(),
  paymentType: Joi.string(),
  payedAmount: Joi.string(),
  balance: Joi.string(),
};