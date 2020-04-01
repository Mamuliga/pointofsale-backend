import Joi from "@hapi/joi";

export const CREATE_ITEM_STAT_REQUEST_BODY = {
  itemId: Joi.number(),
  supplierId: Joi.number(),
  supplier: Joi.string(),
  costPrice: Joi.string(),
  salesPrice: Joi.string(),
  manuDate: Joi.string(),
  expDate: Joi.string(),
  quantity: Joi.string(),
};