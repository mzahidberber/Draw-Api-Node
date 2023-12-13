import Joi from "joi"


export const AddElemenetShema=Joi.object().keys({
    Id:Joi.string(),
    PenId:Joi.string(),
    ElementTypeId:Joi.string(),
    LayerId:Joi.string(),
    createdAt:Joi.date(),
    updatedAt:Joi.date()
})

export const UpdateElemenetShema=Joi.object().keys({
    Id:Joi.string(),
    PenId:Joi.string(),
    ElementTypeId:Joi.string(),
    LayerId:Joi.string(),
    createdAt:Joi.date(),
    updatedAt:Joi.date()
})