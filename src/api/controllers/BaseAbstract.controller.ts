import { injectable } from "inversify";
import { CustomResponse } from "../../core/dtos/CustomResponse"
import { NextFunction, Request, Response } from "express";
import { IGenericService } from "../../business/abstract/IGeneric.service";
import { IDTO } from "../../core/dtos/abstract/IDTO";

@injectable()
export abstract class BaseController<T extends IDTO<any>>{
    private _service:IGenericService<T>
    constructor(service:IGenericService<T>) {
        this._service=service
    }

    protected async CheckEntityIdAsync(entityId:string,res:Response,service:((id:number)=>Promise<void>)){
        const id=parseInt(entityId)
        if(!isNaN(id)){
            await service(id)
        }else
            return res.status(400).json(CustomResponse.Fail(400,"Id must be number",false))
    }

    async GetEntityAsync(req: Request, res: Response, next: NextFunction):Promise<any>{
        await this.CheckEntityIdAsync(req.params.id,res,async (id) =>{
            const result=await this._service.GetAsync(req.user.nameid,id)
            res.status(result.statusCode).json(result)
        })
    }


    async GetEntitiesAsync(req: Request, res: Response, next: NextFunction):Promise<any>{
        const result=await this._service.GetAllAsync(req.user.nameid)
        res.status(result.statusCode).json(result)
    }

    async AddEntitiesAsync(req: Request, res: Response, next: NextFunction):Promise<any>{
        const result=await this._service.AddAllAsync(req.user.nameid,req.body)
        res.status(result.statusCode).json(result)
    }

    async UpdateDrawsAsync(req: Request, res: Response, next: NextFunction):Promise<any>{
        const result=await this._service.UpdateAllAsync(req.user.nameid,req.body)
        res.status(result.statusCode).json(result)
    }

    async DeleteDrawsAsync(req: Request, res: Response, next: NextFunction):Promise<any>{
        const result=await this._service.DeleteAllAsync(req.user.nameid,req.body)
        res.status(result.statusCode).json(result)
    }
}