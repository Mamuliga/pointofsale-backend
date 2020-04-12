import Joi from "@hapi/joi";

export const CREATE_ITEM_REQUEST_BODY = {
  barcode: Joi.string().optional(),
  itemName: Joi.string().required(),
  category: Joi.string().optional(),
  reOrderLevel: Joi.number().optional(),
  description: Joi.string().optional()
};

export const UPDATE_ITEM_REQUEST_BODY = {
  barcode: Joi.string().optional(),
  itemName: Joi.string().optional(),
  category: Joi.string().optional(),
  reOrderLevel: Joi.number().optional(),
  description: Joi.string().optional()
};
