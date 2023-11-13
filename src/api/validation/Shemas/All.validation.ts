import Joi from "joi"

export const IntegerShema=Joi.number().integer().min(1).required().strict()