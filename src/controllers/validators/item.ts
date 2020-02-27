import Joi from "@hapi/joi";
import { ITEM_CATEGORIES } from "../../utilities/constant";

export const CREATE_ITEM_REQUEST_BODY = {
  barcode: Joi.string().optional(),
  itemName: Joi.string().required(),
  category: Joi.string()
    .valid(...Object.keys(ITEM_CATEGORIES))
    .error(new Error("Invalid category"))
    .optional(),
  supplier: Joi.string().required(),
  reOrderLevel: Joi.string().optional(),
  description: Joi.string().optional()
};

export const UPDATE_ITEM_REQUEST_BODY = {
  barcode: Joi.string().optional(),
  itemName: Joi.string().optional(),
  category: Joi.string()
    .valid(...Object.keys(ITEM_CATEGORIES))
    .error(new Error("Invalid category"))
    .optional(),
  supplier: Joi.string().optional(),
  reOrderLevel: Joi.string().optional(),
  description: Joi.string().optional()
};
