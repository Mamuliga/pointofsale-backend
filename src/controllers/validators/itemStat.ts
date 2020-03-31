import Joi from "@hapi/joi";

export const CREATE_ITEM_STAT_REQUEST_BODY = {
  itemId: Joi.string(),
  supplier: Joi.string(),
  costPrice: Joi.string(),
  salesPrice: Joi.string(),
  manuDate: Joi.string(),
  expDate: Joi.string(),
  quantity: Joi.string(),
};