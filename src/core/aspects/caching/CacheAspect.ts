import 'reflect-metadata';
import { NextFunction,Request,Response } from 'express';
import { CoreContainer, CoreTypes } from "../../dependenctresolvers/controllerInstanceFactory.config";
import { ICache } from "../../crosscuttingconcers/caching/abstract/ICache";
import { logger } from "../../crosscuttingconcers/logging/winston/Logger"


export function CacheAspectMethod(className:string,time:number){
    return function(target: any, key: string, descriptor: PropertyDescriptor){
        let originalMethod = target[key]
        target[key] = async function (req: Request, res: Response, next: NextFunction):Promise<any> {
            
            const cache=CoreContainer.get<ICache>(CoreTypes.ICache)
            const cacheKey = `${className}-${key}-${req.user.nameid}-${req.baseUrl}-${JSON.stringify(req.body)}-${JSON.stringify(req.params)}}`
            const isAdd=await cache.isAddAsync(cacheKey)
            if(isAdd){
                const data=await cache.getAsync(cacheKey)
                logger.info(`CACHE | ${className} | ${key} | userid:${req.user.nameid} Return : ${JSON.stringify(data)}`)
                res.json(data)
                return 
            }
                
            if (req.user.authorize) {
                const result=await originalMethod.apply(this, [req, res, next])
                if(res.statusCode==200){
                    cache.addAsync(cacheKey,result,time)
                    logger.info(`CACHE | ${className} | ${key} | userid:${req.user.nameid} Cached: ${JSON.stringify(result)}`)
                }
                    
                return result
            }
            else return
        }
        return target
    } 
}
