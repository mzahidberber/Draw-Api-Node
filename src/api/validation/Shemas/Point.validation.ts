import Joi from "joi"

export const AddPointShema=Joi.object().keys({
    Id:Joi.string(),
    ElementId:Joi.string(),
    PointTypeId:Joi.string(),
    X:Joi.number().required().strict(),
    Y:Joi.number().required().strict(),
    createdAt:Joi.date(),
    updatedAt:Joi.date()
})

export const UpdatePointShema=Joi.object().keys({
    Id:Joi.string(),
    ElementId:Joi.string(),
    PointTypeId:Joi.string(),
    X:Joi.number().strict(),
    Y:Joi.number().strict(),
    createdAt:Joi.date(),
    updatedAt:Joi.date()
})