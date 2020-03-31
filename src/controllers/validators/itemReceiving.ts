import Joi from "@hapi/joi";

export const CREATE_ITEM_REQUEST_BODY = {
    id: Joi.string().optional(),
    costPrice: Joi.string().required(),
    salePrice: Joi.string().optional(),
    revDate: Joi.string().optional(),
    quantity: Joi.string().optional()
};