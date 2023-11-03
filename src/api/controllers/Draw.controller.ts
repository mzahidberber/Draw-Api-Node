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
        // const result=await this._drawService.GetAllAsync("a")
        // const result= await this._drawService.AddAllAsync([
        //     {Id:0,Name:"asd",UserId:"a",NumberOfLayerElements:0,createdAt:new Date(),updatedAt:new Date()},
        //     {Id:2,Name:"asd1",UserId:"a",NumberOfLayerElements:0,createdAt:new Date(),updatedAt:new Date()},
        // ])

        // const asd=await this._drawService.DeleteAllAsync("a",[7])
        const asd=await this._drawService.UpdateAllAsync("a",[
            {Id:1,Name:"asd",NumberOfLayerElements:0,createdAt:new Date(),updatedAt:new Date()}
        ])
        console.log("result ->>>>>>>",asd)
        // res.status(result.statusCode).json(result)
        next()
    }

    async AddDraws(req: Request, res: Response, next: NextFunction):Promise<any>{
        const result=await this._drawService.AddAllAsync([])
        res.status(result.statusCode).json(result)
        next()
    }
} 