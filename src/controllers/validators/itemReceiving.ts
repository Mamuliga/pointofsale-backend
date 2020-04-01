import Joi from "@hapi/joi";

export const CREATE_ITEM_RECEIVING_REQUEST_BODY = {
    costPrice: Joi.number().required(),
    salePrice: Joi.number().optional(),
    revDate: Joi.date().optional(),
    quantity: Joi.number().optional(),
    expDate:Joi.date().optional(),
};