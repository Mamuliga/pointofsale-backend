import Joi from "@hapi/joi";

export const CREATE_ITEM_SALE_REQUEST_BODY = {
    id: Joi.string(),
    sale: Joi.string(),
    item: Joi.string(),
    sellingPrice: Joi.string(),
    discount: Joi.string(),
    quantity: Joi.string(),
    description:Joi.string(),
};