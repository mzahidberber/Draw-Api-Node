import Joi from "joi"

export const AddRadiusShema=Joi.object().keys({
    Id:Joi.number().integer().max(0).strict(),
    ElementId:Joi.number().integer().min(1).required().strict(),
    Value:Joi.number().required().strict(),
    createdAt:Joi.date(),
    updatedAt:Joi.date()
})

export const UpdateRadiusShema=Joi.object().keys({
    Id:Joi.number().integer().min(1).required().strict(),
    ElementId:Joi.number().integer().min(1).required().strict(),
    Value:Joi.number().strict(),
    createdAt:Joi.date(),
    updatedAt:Joi.date()
})