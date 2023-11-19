import Joi from "joi"

export const IntegerShema=Joi.number().integer().required().strict()