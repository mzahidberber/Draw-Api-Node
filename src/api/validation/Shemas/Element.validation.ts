import Joi from "joi"


export const AddElemenetShema=Joi.object().keys({
    Id:Joi.number().integer().max(0).strict(),
    PenId:Joi.number().integer().min(1).required().strict(),
    ElementTypeId:Joi.number().integer().min(1).required().strict(),
    LayerId:Joi.number().integer().min(1).required().strict(),
    createdAt:Joi.date(),
    updatedAt:Joi.date()
})

export const UpdateElemenetShema=Joi.object().keys({
    Id:Joi.number().integer().min(1).required().strict(),
    PenId:Joi.number().integer().min(1).required().strict(),
    ElementTypeId:Joi.number().integer().min(1).required().strict(),
    LayerId:Joi.number().integer().min(1).required().strict(),
    createdAt:Joi.date(),
    updatedAt:Joi.date()
})