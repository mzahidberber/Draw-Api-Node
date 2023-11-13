import Joi from "joi"

export const AddPointShema=Joi.object().keys({
    Id:Joi.number().integer().max(0).strict(),
    ElementId:Joi.number().integer().min(1).required().strict(),
    PointTypeId:Joi.number().integer().min(1).required().strict(),
    X:Joi.number().required().strict(),
    Y:Joi.number().required().strict(),
    createdAt:Joi.date(),
    updatedAt:Joi.date()
})

export const UpdatePointShema=Joi.object().keys({
    Id:Joi.number().integer().min(1).required().strict(),
    ElementId:Joi.number().integer().min(1).required().strict(),
    PointTypeId:Joi.number().integer().min(1).required().strict(),
    X:Joi.number().strict(),
    Y:Joi.number().strict(),
    createdAt:Joi.date(),
    updatedAt:Joi.date()
})