import { Router,Request,Response,NextFunction } from 'express';
import { ControllerTypes, ControllerContainer } from '../dependencyresolvers/controllerInstanceFactory.config';
import { AutorizeClass } from '../jwt/Authendication';
import { injectable } from 'inversify';
import { LayerContoller } from '../controllers/concrete/Layer.controller';
import { AddLayerShema, UpdateLayerShema } from '../validation/Shemas/Layer.validation';
import { ValidationListMethod } from '../validation/Validation';
import { IntegerShema } from '../validation/Shemas/All.validation';

@injectable()
@AutorizeClass()
export class LayerRouter{
    public router:Router
    
    constructor() {
        this.router=Router()
        this.router.post('/add', this.addAsync.bind(this))
        this.router.delete('/delete', this.deleteAsync.bind(this))
        this.router.put('/update', this.updateAsync.bind(this))
        this.router.get('/layers', this.getAllAsync.bind(this))
        this.router.get('/:id', this.getAsync.bind(this))
    }
    
    private async getAllAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<LayerContoller>(ControllerTypes.LayerController).GetEntitiesAsync(req, res, next)
    }

    private async getAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<LayerContoller>(ControllerTypes.LayerController).GetEntityAsync(req, res, next)
    }
    @ValidationListMethod("LayerRouter",AddLayerShema)
    private async addAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<LayerContoller>(ControllerTypes.LayerController).AddEntitiesAsync(req, res, next)
    }
    @ValidationListMethod("LayerRouter",IntegerShema)
    private async deleteAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<LayerContoller>(ControllerTypes.LayerController).DeleteDrawsAsync(req, res, next)
    }
    @ValidationListMethod("LayerRouter",UpdateLayerShema)
    private async updateAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<LayerContoller>(ControllerTypes.LayerController).UpdateDrawsAsync(req, res, next)
    }
} 

