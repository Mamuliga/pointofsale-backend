import Joi from "@hapi/joi";

export const CREATE_EMPLOYEE_REQUEST_BODY = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().optional(),
  phoneNO: Joi.string().required(),
  gender: Joi.string().required(),
  address: Joi.string().optional(),
  dob: Joi.string().optional(),
  desc: Joi.string().optional(),
  imgName: Joi.string().required(),
  discount: Joi.string().optional(),
  bankAccount: Joi.string().required(),
  joinedDate: Joi.date().required(),
  recruiter: Joi.string().required(),

};

export const UPDATE_EMPLOYEE_REQUEST_BODY = {
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  email: Joi.string().email().optional(),
  phoneNO: Joi.string().optional(),
  gender: Joi.string().optional(),
  address: Joi.string().optional(),
  dob: Joi.string().optional(),
  desc: Joi.string().optional(),
  imgName: Joi.string().optional(),
  discount: Joi.string().optional(),
  bankAccount: Joi.string().optional(),
  joinedDate: Joi.date().optional(),
  recruiter: Joi.string().optional(),

};

export const DELETE_EMPLOYEE_REQUEST_BODY = {
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  email: Joi.string().email().optional(),
  phoneNO: Joi.string().optional(),
  gender: Joi.string().optional(),
  address: Joi.string().optional(),
  dob: Joi.string().optional(),
  desc: Joi.string().optional(),
  imgName: Joi.string().optional(),
  discount: Joi.string().optional(),
  bankAccount: Joi.string().optional(),
  joinedDate: Joi.date().optional(),
  recruiter: Joi.string().optional(),

};