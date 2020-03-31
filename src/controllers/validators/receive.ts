import Joi from "@hapi/joi";

export const CREATE_RECEIVE_REQUEST_BODY = {
  itemId: Joi.string(),
  supplier: Joi.string(),
  total: Joi.string(),
  total_Discount: Joi.string(),
  payment_Type: Joi.string(),
  payed_Amount: Joi.string(),
  balance: Joi.string(),
};