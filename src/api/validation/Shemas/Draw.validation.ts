import Joi from "joi"


export const AddDrawShema=Joi.object().keys({
    Id:Joi.string(),
    Name:Joi.string().required()
})

export const UpdateDrawShema=Joi.object().keys({
    Id:Joi.string(),
    Name:Joi.string(),
    updatedAt:Joi.date()
})