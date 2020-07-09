import Joi from "@hapi/joi";

export const SALE_ROUTE_REQUEST_BODY = {
  totalDiscount: Joi.number(),
  balance: Joi.number(),
  revdAmount:Joi.number(),
  itemSales:Joi.array(),
  customerId: Joi.number(),
  dueDate: Joi.date(),
  total: Joi.number(),
  paymentType: Joi.object(),
  
};