import Joi from "@hapi/joi";

export const CREATE_CAHSBOOK_REQUEST_BODY = {
    cashBook: Joi.string().optional(),
    refNo: Joi.string().optional(),
    description: Joi.string().optional(),
    type: Joi.string().optional(),
    amount: Joi.string().optional(),
};