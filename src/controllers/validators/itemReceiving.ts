import Joi from "@hapi/joi";

export const CREATE_ITEM_RECEIVING_REQUEST_BODY = {
    id: Joi.string().optional(),
    sale: Joi.string().optional(),
    costPrice: Joi.string().required(),
    salePrice: Joi.string().optional(),
    revDate: Joi.string().optional(),
    quantity: Joi.string().optional(),
    expDate:Joi.string().optional(),
};