import { inject, injectable} from "inversify";
import { NextFunction, Request, Response } from "express";
import { IDrawService } from "../../../business/abstract/IDraw.service";
import { BaseController } from "../abstract/BaseAbstract.controller";
import { DrawDTO } from "../../../core/dtos/concrete/DrawDTO";
import { ServiceTypes } from "../../../business/dependencyresolvers/serviceInstanceFactory.config";
import { CacheAspectMethod } from "../../../core/aspects/caching/CacheAspect";


@injectable()
export class DrawContoller extends BaseController<DrawDTO>{
    constructor(@inject<IDrawService>(ServiceTypes.IDrawService) private service : IDrawService) {
        super(service)
    }
    @CacheAspectMethod("DrawContoller",60)
    async GetDrawLayers(req: Request, res: Response, next: NextFunction):Promise<any>{
        await this.CheckEntityIdAsync(req.params.id,res,async (id) =>{
            const result=await this.service.GetLayersAsync(req.user.nameid,id)
            res.status(result.statusCode).json(result)
            return result
        })
    }

} 