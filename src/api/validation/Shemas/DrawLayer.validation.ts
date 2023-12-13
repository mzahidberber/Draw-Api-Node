import Joi from "joi";
import { CommandEnums } from "../../../draw/concrete/Enums";

export const PointGeoShema=Joi.object().keys({
    X:Joi.number().min(-99999.99999).max(99999.99999).required().strict(),
    Y:Joi.number().min(-99999.99999).max(99999.99999).required().strict(),
    Z:Joi.number().min(-99999.99999).max(99999.99999).required().strict()
})

export const RadiusShema=Joi.object().keys({
    radius:Joi.number().min(-99999.99999).max(99999.99999).required().strict()
})

export const StartCommand=Joi.object().keys({
    command:Joi.number().max(Object.keys(CommandEnums).length).min(0).required().strict(),
    drawId:Joi.string(),
    layerId:Joi.string(),
    penId:Joi.string()
})