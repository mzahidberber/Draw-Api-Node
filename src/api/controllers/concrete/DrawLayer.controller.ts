import { inject, injectable} from "inversify";
import { NextFunction, Request, Response } from "express";
import { ServiceTypes } from "../../../business/dependencyresolvers/serviceInstanceFactory.config";
import { IDrawLayerService } from "../../../business/abstract/IDrawLayer.service";


@injectable()
export class DrawLayerContoller{
    constructor(@inject<IDrawLayerService>(ServiceTypes.IDrawLayerService) private service : IDrawLayerService) {
        
    }
    
    async startCommand(req: Request, res: Response, next: NextFunction):Promise<any>{
        const result=await this.service.startCommandAsync(req.user.nameid,req.body.command,req.body.drawId,req.body.layerId,req.body.penId)
        res.status(result.statusCode).json(result)
        return result

    }

    async addPoint(req: Request, res: Response, next: NextFunction):Promise<any>{
        const result=await this.service.addCoordinateAsync(req.user.nameid,req.body)
        res.status(result.statusCode).json(result)
        return result
        
    }


    async stopCommad(req: Request, res: Response, next: NextFunction):Promise<any>{
        const result=await this.service.stopCommandAsync(req.user.nameid)
        res.status(result.statusCode).json(result)
        return result
    }

    async setRadius(req: Request, res: Response, next: NextFunction):Promise<any>{
        const result=await this.service.setRadiusAsync(req.user.nameid,req.body.radius)
        res.status(result.statusCode).json(result)
        return result
    }

    async setIsFinish(req: Request, res: Response, next: NextFunction):Promise<any>{
        const result=await this.service.setIsFinish(req.user.nameid)
        res.status(result.statusCode).json(result)
        return result
    }
} 