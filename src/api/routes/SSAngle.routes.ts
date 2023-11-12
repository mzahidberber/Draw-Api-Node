import { Router,Request,Response,NextFunction } from 'express';
import { ControllerTypes, ControllerContainer } from '../dependencyresolvers/controllerInstanceFactory.config';
import { AutorizeClass } from '../jwt/Authendication';
import { injectable } from 'inversify';
import { SSAngleController } from '../controllers/SSAngle.controller';

@injectable()
@AutorizeClass()
export class SSAngleRouter{
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
        await ControllerContainer.get<SSAngleController>(ControllerTypes.SSAngleController).GetEntitiesAsync(req, res, next)
    }

    private async getAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<SSAngleController>(ControllerTypes.SSAngleController).GetEntityAsync(req, res, next)
    }
    
    private async addAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<SSAngleController>(ControllerTypes.SSAngleController).AddEntitiesAsync(req, res, next)
    }

    private async deleteAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<SSAngleController>(ControllerTypes.SSAngleController).DeleteDrawsAsync(req, res, next)
    }

    private async updateAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<SSAngleController>(ControllerTypes.SSAngleController).UpdateDrawsAsync(req, res, next)
    }
} 

