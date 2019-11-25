import Joi from "@hapi/joi";

export const CREATE_EMPLOYEE_REQUEST_BODY = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  isAdmin: Joi.boolean().optional()
};
