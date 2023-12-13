import { Router,Request,Response,NextFunction } from 'express';
import { ControllerTypes, ControllerContainer } from '../dependencyresolvers/controllerInstanceFactory.config';
import { ElementContoller } from '../controllers/concrete/Element.controller';
import { AutorizeClass } from '../jwt/Authendication';
import { injectable } from 'inversify';
import { ValidationListMethod } from '../validation/Validation';
import { IntegerShema, StringShema } from '../validation/Shemas/All.validation';
import { AddElemenetShema, UpdateElemenetShema } from '../validation/Shemas/Element.validation';

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
    
    @ValidationListMethod("ElementRouter",AddElemenetShema)
    private async addAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<ElementContoller>(ControllerTypes.ElementController).AddEntitiesAsync(req, res, next)
    }

    @ValidationListMethod("ElementRouter",StringShema)
    private async deleteAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<ElementContoller>(ControllerTypes.ElementController).DeleteDrawsAsync(req, res, next)
    }

    @ValidationListMethod("ElementRouter",UpdateElemenetShema)
    private async updateAsync(req: Request, res: Response, next: NextFunction): Promise<void> {
        await ControllerContainer.get<ElementContoller>(ControllerTypes.ElementController).UpdateDrawsAsync(req, res, next)
    }
} 

