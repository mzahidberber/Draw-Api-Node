import { Router,Request,Response,NextFunction } from 'express';
import { ControllerTypes, ControllerContainer } from '../dependencyresolvers/controllerInstanceFactory.config';
import { AutorizeClass } from '../jwt/Authendication';
import { injectable } from 'inversify';
import { PointController } from '../controllers/concrete/Point.controller';
import { AddPointShema, UpdatePointShema } from '../validation/Shemas/Point.validation';
import { ValidationListMethod } from '../validation/Validation';
import { IntegerShema, StringShema } from '../validation/Shemas/All.validation';
@injectable()
@AutorizeClass()
export class PointRouter{
    public router:Router
    
    constructor() {
        this.router=Router()
        this.router.post('/add', this.addAsync.bind(this))
        this.router.delete('/delete', this.deleteAsync.bind(this))
        this.router.put('/update', this.updateAsync.bind(this))
        this.router.get('/points', this.getAllAsync.bind(this))
        this.router.get('/:id', this.getAsync.bind(this))
    }
    
    private async getAllAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<PointController>(ControllerTypes.PointController).GetEntitiesAsync(req, res, next)
    }

    private async getAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<PointController>(ControllerTypes.PointController).GetEntityAsync(req, res, next)
    }
    @ValidationListMethod("PointRouter",AddPointShema)
    private async addAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<PointController>(ControllerTypes.PointController).AddEntitiesAsync(req, res, next)
    }
    @ValidationListMethod("PointRouter",StringShema)
    private async deleteAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<PointController>(ControllerTypes.PointController).DeleteDrawsAsync(req, res, next)
    }
    @ValidationListMethod("PointRouter",UpdatePointShema)
    private async updateAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<PointController>(ControllerTypes.PointController).UpdateDrawsAsync(req, res, next)
    }
} 

