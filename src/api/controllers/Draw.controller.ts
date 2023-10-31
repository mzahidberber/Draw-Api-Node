import { injectable} from "inversify";
import { NextFunction, Request, Response } from "express";
import { IDrawService } from "../../business/abstract/IDrawService";
import  { ServiceContainer, ServiceTypes } from "../../business/dependencyresolvers/serviceInstanceFactory.config";

@injectable()
export class DrawContoller{
    private _drawService:IDrawService

    constructor() {
        this._drawService=ServiceContainer.get(ServiceTypes.IDrawService)
    }

    async GetDraws(req: Request, res: Response, next: NextFunction):Promise<any>{
        const result=await this._drawService.GetAllAsync("a")
        res.status(result.statusCode).json(result)
        next()
    }

    async AddDraws(req: Request, res: Response, next: NextFunction):Promise<any>{
        const result=await this._drawService.AddAllAsync([])
        res.status(result.statusCode).json(result)
        next()
    }
} 