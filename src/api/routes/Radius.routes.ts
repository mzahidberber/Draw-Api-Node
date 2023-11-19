import { Router,Request,Response,NextFunction } from 'express';
import { ControllerTypes, ControllerContainer } from '../dependencyresolvers/controllerInstanceFactory.config';
import { AutorizeClass } from '../jwt/Authendication';
import { injectable } from 'inversify';
import { RadiusController } from '../controllers/concrete/Radius.controller';
import { ValidationListMethod } from '../validation/Validation';
import { AddRadiusShema, UpdateRadiusShema } from '../validation/Shemas/Radius.validation';
import { IntegerShema } from '../validation/Shemas/All.validation';
@injectable()
@AutorizeClass()
export class RadiusRouter{
    public router:Router
    
    constructor() {
        this.router=Router()
        this.router.post('/add', this.addAsync.bind(this))
        this.router.delete('/delete', this.deleteAsync.bind(this))
        this.router.put('/update', this.updateAsync.bind(this))
        this.router.get('/radiuses', this.getAllAsync.bind(this))
        this.router.get('/:id', this.getAsync.bind(this))
    }
    
    private async getAllAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<RadiusController>(ControllerTypes.RadiusController).GetEntitiesAsync(req, res, next)
    }

    private async getAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<RadiusController>(ControllerTypes.RadiusController).GetEntityAsync(req, res, next)
    }
    @ValidationListMethod("RadiusRouter",AddRadiusShema)
    private async addAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<RadiusController>(ControllerTypes.RadiusController).AddEntitiesAsync(req, res, next)
    }
    @ValidationListMethod("RadiusRouter",IntegerShema)
    private async deleteAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<RadiusController>(ControllerTypes.RadiusController).DeleteDrawsAsync(req, res, next)
    }
    @ValidationListMethod("RadiusRouter",UpdateRadiusShema)
    private async updateAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<RadiusController>(ControllerTypes.RadiusController).UpdateDrawsAsync(req, res, next)
    }
} 

