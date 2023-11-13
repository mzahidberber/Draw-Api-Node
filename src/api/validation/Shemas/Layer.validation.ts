import Joi from "joi"

export const AddLayerShema=Joi.object().keys({
    Id:Joi.number().integer().max(0).strict(),
    PenId:Joi.number().integer().min(1).required().strict(),
    DrawId:Joi.number().integer().min(1).required().strict(),
    Name:Joi.string().required(),
    Lock:Joi.boolean().required(),
    Visibility:Joi.boolean().required(),
    Thickness:Joi.number().min(0.01).max(10).required().strict(),
    createdAt:Joi.date(),
    updatedAt:Joi.date()
})

export const UpdateLayerShema=Joi.object().keys({
    Id:Joi.number().integer().min(1).required().strict(),
    PenId:Joi.number().integer().min(1).required().strict(),
    DrawId:Joi.number().integer().min(1).required().strict(),
    Name:Joi.string(),
    Lock:Joi.boolean(),
    Visibility:Joi.boolean(),
    Thickness:Joi.number().min(0.01).max(10).strict(),
    createdAt:Joi.date(),
    updatedAt:Joi.date()
})