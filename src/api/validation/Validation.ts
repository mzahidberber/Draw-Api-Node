import Joi from "joi";
import { NextFunction,Request,Response } from 'express';
import { logger } from "../../core/crosscuttingconcers/logging/winston/Logger";
import { CustomResponse } from "../../core/dtos/CustomResponse";


export function ValidationListMethod(className:string,shema:Joi.AnySchema<any>){
    return function(target: any, key: string, descriptor: PropertyDescriptor){
        let originalMethod = target[key]
        target[key] = async function (req: Request, res: Response, next: NextFunction):Promise<any> {
            if(Object.entries(req.body).length==0){
                res.status(400).json(CustomResponse.Fail(400,"body cant be empty",false))
                return
            }
            for (let i = 0; i < req.body.length; i++) {
                const item = req.body[i]
                try {
                    await shema.validateAsync(item);
                }
                catch (err:any) { 
                    logger.error(`${className} | ${key} | userId : ${req.user.nameid} | validation error : ${err.message}`)
                    res.status(400).json(CustomResponse.Fail(400,err.message,false))
                    return
                }
            }
            return originalMethod.apply(this, [req, res, next])
        }
        return target
    } 
}


export function ValidationMethod(className:string,shema:Joi.AnySchema<any>){
    return function(target: any, key: string, descriptor: PropertyDescriptor){
        let originalMethod = target[key]
        target[key] = async function (req: Request, res: Response, next: NextFunction):Promise<any> {
            if(Object.entries(req.body).length==0){
                res.status(400).json(CustomResponse.Fail(400,"body cant be empty",false))
                return
            }
            try {
                await shema.validateAsync(req.body);
            }
            catch (err:any) { 
                logger.error(`${className} | ${key} | userId : ${req.user.nameid} | validation error : ${err.message}`)
                res.status(400).json(CustomResponse.Fail(400,err.message,false))
                return
            }
            return originalMethod.apply(this, [req, res, next])
        }
        return target
    } 
}
