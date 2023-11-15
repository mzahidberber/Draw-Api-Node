import { NextFunction, Router,Request,Response } from 'express';
import { DrawContoller } from '../controllers/concrete/Draw.controller';
import { ControllerTypes, ControllerContainer } from '../dependencyresolvers/controllerInstanceFactory.config';
import { AutorizeClass } from '../jwt/Authendication';
import { injectable } from 'inversify';
import { ValidationMethod } from '../validation/Validation';
import { AddDrawShema, UpdateDrawShema } from '../validation/Shemas/Draw.validation';
import { IntegerShema } from '../validation/Shemas/All.validation';
import { CacheAspectMethod } from '../../core/aspects/caching/CacheAspect';
@injectable()
@AutorizeClass()
export class DrawRouter{
    public router:Router
    
    constructor() {
        this.router=Router()
        this.router.post('/add', this.addAsync.bind(this))
        this.router.delete('/delete', this.deleteAsync.bind(this))
        this.router.put('/update', this.updateAsync.bind(this))
        this.router.get('/draws', this.getAllAsync.bind(this))
        this.router.get('/:id', this.getAsync.bind(this))
        this.router.get('/:id/layers', this.getWithLayerAsync.bind(this))
    }
    
    private async getAllAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.log(req.baseUrl)
        await ControllerContainer.get<DrawContoller>(ControllerTypes.DrawController).GetEntitiesAsync(req, res, next)
    }

    private async getWithLayerAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<DrawContoller>(ControllerTypes.DrawController).GetDrawLayers(req, res, next)
    }

    private async getAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<DrawContoller>(ControllerTypes.DrawController).GetEntityAsync(req, res, next)
    }
    @ValidationMethod("DrawRouter",AddDrawShema)
    private async addAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<DrawContoller>(ControllerTypes.DrawController).AddEntitiesAsync(req, res, next)
    }
    @ValidationMethod("DrawRouter",IntegerShema)
    private async deleteAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<DrawContoller>(ControllerTypes.DrawController).DeleteDrawsAsync(req, res, next)
    }
    @ValidationMethod("DrawRouter",UpdateDrawShema)
    private async updateAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<DrawContoller>(ControllerTypes.DrawController).UpdateDrawsAsync(req, res, next)
    }
} 

