import Joi from "joi"

export const AddSSAngleShema=Joi.object().keys({
    Id:Joi.string(),
    ElementId:Joi.string(),
    Value:Joi.number().required().strict(),
    Type:Joi.string().valid("start","stop").required(),
    createdAt:Joi.date(),
    updatedAt:Joi.date()
})

export const UpdateSSAngleShema=Joi.object().keys({
    Id:Joi.string(),
    ElementId:Joi.string(),
    Value:Joi.number().strict(),
    Type:Joi.string().valid("start","stop"),
    createdAt:Joi.date(),
    updatedAt:Joi.date()
})