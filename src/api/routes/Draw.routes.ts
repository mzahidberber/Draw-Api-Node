import { NextFunction, Router,Request,Response } from 'express';
import { DrawContoller } from '../controllers/concrete/Draw.controller';
import { ControllerTypes, ControllerContainer } from '../dependencyresolvers/controllerInstanceFactory.config';
import { AutorizeClass } from '../jwt/Authendication';
import { injectable } from 'inversify';
import { ValidationListMethod } from '../validation/Validation';
import { AddDrawShema, UpdateDrawShema } from '../validation/Shemas/Draw.validation';
import { IntegerShema, StringShema } from '../validation/Shemas/All.validation';
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
        await ControllerContainer.get<DrawContoller>(ControllerTypes.DrawController).GetEntitiesAsync(req, res, next)
    }

    private async getWithLayerAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<DrawContoller>(ControllerTypes.DrawController).GetDrawLayers(req, res, next)
    }

    private async getAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<DrawContoller>(ControllerTypes.DrawController).GetEntityAsync(req, res, next)
    }
    @ValidationListMethod("DrawRouter",AddDrawShema)
    private async addAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<DrawContoller>(ControllerTypes.DrawController).AddEntitiesAsync(req, res, next)
    }
    @ValidationListMethod("DrawRouter",StringShema)
    private async deleteAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<DrawContoller>(ControllerTypes.DrawController).DeleteDrawsAsync(req, res, next)
    }
    @ValidationListMethod("DrawRouter",UpdateDrawShema)
    private async updateAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<DrawContoller>(ControllerTypes.DrawController).UpdateDrawsAsync(req, res, next)
    }
} 

