import { Router,Request,Response,NextFunction } from 'express';
import { ControllerTypes, ControllerContainer } from '../dependencyresolvers/controllerInstanceFactory.config';
import { AutorizeClass } from '../jwt/Authendication';
import { injectable } from 'inversify';
import { RadiusController } from '../controllers/Radius.controller';

@injectable()
@AutorizeClass()
export class RadiusRouter{
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
        await ControllerContainer.get<RadiusController>(ControllerTypes.RadiusController).GetEntitiesAsync(req, res, next)
    }

    private async getAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<RadiusController>(ControllerTypes.RadiusController).GetEntityAsync(req, res, next)
    }
    
    private async addAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<RadiusController>(ControllerTypes.RadiusController).AddEntitiesAsync(req, res, next)
    }

    private async deleteAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<RadiusController>(ControllerTypes.RadiusController).DeleteDrawsAsync(req, res, next)
    }

    private async updateAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<RadiusController>(ControllerTypes.RadiusController).UpdateDrawsAsync(req, res, next)
    }
} 

