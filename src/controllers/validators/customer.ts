import Joi from "@hapi/joi";

export const CREATE_CUSTOMER_REQUEST_BODY = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string()
    .email()
    .optional(),
  phoneNo: Joi.string().required(),
  companyName: Joi.string().required(),
  gender: Joi.string().required(),
  address: Joi.string().optional(),
  dob: Joi.string().optional(),
  description: Joi.string().optional(),
  profilePicture: Joi.string().required(),
  defaultDiscount: Joi.string().optional(),
  bankAccount: Joi.string().required(),
  regDate: Joi.date().required(),
  recruiter: Joi.string().required()
};

export const UPDATE_CUSTOMER_REQUEST_BODY = {
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  email: Joi.string()
    .email()
    .optional(),
  phoneNo: Joi.string().optional(),
  companyName: Joi.string().optional(),
  gender: Joi.string().optional(),
  address: Joi.string().optional(),
  dob: Joi.string().optional(),
  description: Joi.string().optional(),
  profilePicture: Joi.string().optional(),
  defaultDiscount: Joi.string().optional(),
  bankAccount: Joi.string().optional(),
  regDate: Joi.date().optional(),
  recruiter: Joi.string().optional()
};

export const DELETE_CUSTOMER_REQUEST_BODY = {
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  email: Joi.string()
    .email()
    .optional(),
  phoneNo: Joi.string().optional(),
  companyName: Joi.string().optional(),
  gender: Joi.string().optional(),
  address: Joi.string().optional(),
  dob: Joi.string().optional(),
  description: Joi.string().optional(),
  profilePicture: Joi.string().optional(),
  defaultDiscount: Joi.string().optional(),
  bankAccount: Joi.string().optional(),
  regDate: Joi.date().optional(),
  recruiter: Joi.string().optional()
};
