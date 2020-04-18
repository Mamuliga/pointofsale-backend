import Joi from "@hapi/joi";

export const CREATE_SALE_REQUEST_BODY = {
  customerId: Joi.number(),
  total: Joi.number(),
  totalDiscount: Joi.number(),
  paymentType: Joi.string(),
  balance: Joi.number(),
  revdAmount:Joi.number(),
  itemSales:Joi.array(),
  cashBookDetails:Joi.object(),
};