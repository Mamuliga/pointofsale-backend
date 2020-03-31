import Joi from "@hapi/joi";

export const CREATE_SALE_REQUEST_BODY = {
  customer: Joi.string(),
  total: Joi.string(),
  totalDiscount: Joi.string(),
  paymentType: Joi.string(),
  balance: Joi.string(),
  revdAmount:Joi.string(),
};