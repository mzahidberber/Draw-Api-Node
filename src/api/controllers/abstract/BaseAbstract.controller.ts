import { injectable } from "inversify";
import { CustomResponse } from "../../../core/dtos/CustomResponse"
import { NextFunction, Request, Response } from "express";
import { IGenericService } from "../../../business/abstract/IGeneric.service";
import { IDTO } from "../../../core/dtos/abstract/IDTO";
import { CacheAspectMethod } from "../../../core/aspects/caching/CacheAspect";
import { CoreContainer, CoreTypes } from "../../../core/dependenctresolvers/controllerInstanceFactory.config";
import { ICache } from "../../../core/crosscuttingconcers/caching/abstract/ICache";

@injectable()
export abstract class BaseController<T extends IDTO<any>>{
    private _service:IGenericService<T>
    private _cache:ICache
    constructor(service:IGenericService<T>) {
        this._service=service
        this._cache=CoreContainer.get<ICache>(CoreTypes.ICache)
    }

    
    protected async CheckEntityIdAsync(entityId:string,res:Response,service:((id:string)=>Promise<any>)):Promise<CustomResponse<T>>{
        // const id=parseInt(entityId)
        // if(!isNaN(id)){
            return await service(entityId)
        // }else
        //     return CustomResponse.Fail(400,"Id must be number",false)
    }

    @CacheAspectMethod("BaseController",60)
    async GetEntityAsync(req: Request, res: Response, next: NextFunction):Promise<any>{
        await this._service.GetAsync(req.user.nameid,req.params.id)
    }
    
    @CacheAspectMethod("BaseController",60)
    async GetEntitiesAsync(req: Request, res: Response, next: NextFunction):Promise<any>{
        const result=await this._service.GetAllAsync(req.user.nameid)
        res.status(result.statusCode).json(result)
        return result
    }
    
    async AddEntitiesAsync(req: Request, res: Response, next: NextFunction):Promise<any>{
        const result=await this._service.AddAllAsync(req.user.nameid,req.body)
        await this._cache.removeByPatternAsync(`*-*-${req.user.nameid}-${req.baseUrl}-*-*`)
        res.status(result.statusCode).json(result)
        
    }

    async UpdateDrawsAsync(req: Request, res: Response, next: NextFunction):Promise<any>{
        const result=await this._service.UpdateAllAsync(req.user.nameid,req.body)
        await this._cache.removeByPatternAsync(`*-*-${req.user.nameid}-${req.baseUrl}-*-*`)
        res.status(result.statusCode).json(result)
    }

    async DeleteDrawsAsync(req: Request, res: Response, next: NextFunction):Promise<any>{
        const result=await this._service.DeleteAllAsync(req.user.nameid,req.body)
        await this._cache.removeByPatternAsync(`*-*-${req.user.nameid}-${req.baseUrl}-*-*`)
        res.status(result.statusCode).json(result)
    }
}