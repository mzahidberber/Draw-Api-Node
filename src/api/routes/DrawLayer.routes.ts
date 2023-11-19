import { NextFunction, Router,Request,Response } from 'express';
import { ControllerTypes, ControllerContainer } from '../dependencyresolvers/controllerInstanceFactory.config';
import { AutorizeClass } from '../jwt/Authendication';
import { injectable } from 'inversify';
import { ValidationListMethod, ValidationMethod } from '../validation/Validation';
import { IntegerShema } from '../validation/Shemas/All.validation';
import { DrawLayerContoller } from '../controllers/concrete/DrawLayer.controller';
import { PointGeoShema, RadiusShema, StartCommand } from '../validation/Shemas/DrawLayer.validation';
@injectable()
@AutorizeClass()
export class DrawLayerRouter{
    public router:Router
    
    constructor() {
        this.router=Router()
        this.router.post('/startCommand', this.startCommand.bind(this))
        this.router.post('/addCoordinate', this.addCoordinate.bind(this))
        this.router.put('/stopCommand', this.stopCommand.bind(this))
        this.router.put('/setRadius', this.setRadius.bind(this))
        this.router.put('/setIsFinish', this.setIsFinish.bind(this))
    }
    @ValidationMethod("DrawLayerRouter",StartCommand)
    private async startCommand(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<DrawLayerContoller>(ControllerTypes.DrawLayerContoller).startCommand(req, res, next)
    }
    @ValidationMethod("DrawLayerRouter",PointGeoShema)
    private async addCoordinate(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<DrawLayerContoller>(ControllerTypes.DrawLayerContoller).addPoint(req, res, next)
    }

    private async stopCommand(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<DrawLayerContoller>(ControllerTypes.DrawLayerContoller).stopCommad(req, res, next)
    }
    @ValidationMethod("DrawLayerRouter",RadiusShema)
    private async setRadius(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<DrawLayerContoller>(ControllerTypes.DrawLayerContoller).setRadius(req, res, next)
    }

    private async setIsFinish(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<DrawLayerContoller>(ControllerTypes.DrawLayerContoller).setIsFinish(req, res, next)
    }
} 

