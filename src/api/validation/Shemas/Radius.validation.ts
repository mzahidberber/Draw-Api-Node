import Joi from "joi"

export const AddRadiusShema=Joi.object().keys({
    Id:Joi.string(),
    ElementId:Joi.string(),
    Value:Joi.number().required().strict(),
    createdAt:Joi.date(),
    updatedAt:Joi.date()
})

export const UpdateRadiusShema=Joi.object().keys({
    Id:Joi.string(),
    ElementId:Joi.string(),
    Value:Joi.number().strict(),
    createdAt:Joi.date(),
    updatedAt:Joi.date()
})