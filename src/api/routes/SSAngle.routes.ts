import { Router,Request,Response,NextFunction } from 'express';
import { ControllerTypes, ControllerContainer } from '../dependencyresolvers/controllerInstanceFactory.config';
import { AutorizeClass } from '../jwt/Authendication';
import { injectable } from 'inversify';
import { SSAngleController } from '../controllers/concrete/SSAngle.controller';
import { ValidationListMethod } from '../validation/Validation';
import { AddSSAngleShema, UpdateSSAngleShema } from '../validation/Shemas/SSAngle.validation';
import { IntegerShema, StringShema } from '../validation/Shemas/All.validation';
@injectable()
@AutorizeClass()
export class SSAngleRouter{
    public router:Router
    
    constructor() {
        this.router=Router()
        this.router.post('/add', this.addAsync.bind(this))
        this.router.delete('/delete', this.deleteAsync.bind(this))
        this.router.put('/update', this.updateAsync.bind(this))
        this.router.get('/ssangles', this.getAllAsync.bind(this))
        this.router.get('/:id', this.getAsync.bind(this))
    }
    
    private async getAllAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<SSAngleController>(ControllerTypes.SSAngleController).GetEntitiesAsync(req, res, next)
    }

    private async getAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<SSAngleController>(ControllerTypes.SSAngleController).GetEntityAsync(req, res, next)
    }
    @ValidationListMethod("SSAngleRouter",AddSSAngleShema)
    private async addAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<SSAngleController>(ControllerTypes.SSAngleController).AddEntitiesAsync(req, res, next)
    }
    @ValidationListMethod("SSAngleRouter",StringShema)
    private async deleteAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<SSAngleController>(ControllerTypes.SSAngleController).DeleteDrawsAsync(req, res, next)
    }
    @ValidationListMethod("SSAngleRouter",UpdateSSAngleShema)
    private async updateAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<SSAngleController>(ControllerTypes.SSAngleController).UpdateDrawsAsync(req, res, next)
    }
} 

