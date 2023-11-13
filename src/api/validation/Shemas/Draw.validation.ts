import Joi from "joi"


export const AddDrawShema=Joi.object().keys({
    Id:Joi.number().integer().max(0).strict(),
    Name:Joi.string().required()
})

export const UpdateDrawShema=Joi.object().keys({
    Id:Joi.number().integer().min(1).required().strict(),
    Name:Joi.string(),
    updatedAt:Joi.date()
})