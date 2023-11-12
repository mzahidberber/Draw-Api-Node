import { Router,Request,Response,NextFunction } from 'express';
import { ControllerTypes, ControllerContainer } from '../dependencyresolvers/controllerInstanceFactory.config';
import { ElementContoller } from '../controllers/Element.controller';
import { AutorizeClass } from '../jwt/Authendication';
import { injectable } from 'inversify';

@injectable()
@AutorizeClass()
export class ElementRouter{
    public router:Router
    
    constructor() {
        this.router=Router()
        this.router.post('/add', this.addAsync.bind(this))
        this.router.delete('/delete', this.deleteAsync.bind(this))
        this.router.put('/update', this.updateAsync.bind(this))
        this.router.get('/elements', this.getAllAsync.bind(this))
        this.router.get('/:id', this.getAsync.bind(this))
    }
    
    private async getAllAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<ElementContoller>(ControllerTypes.ElementController).GetEntitiesAsync(req, res, next)
    }

    private async getAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<ElementContoller>(ControllerTypes.ElementController).GetEntityAsync(req, res, next)
    }
    
    private async addAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<ElementContoller>(ControllerTypes.ElementController).AddEntitiesAsync(req, res, next)
    }

    private async deleteAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<ElementContoller>(ControllerTypes.ElementController).DeleteDrawsAsync(req, res, next)
    }

    private async updateAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<ElementContoller>(ControllerTypes.ElementController).UpdateDrawsAsync(req, res, next)
    }
} 

