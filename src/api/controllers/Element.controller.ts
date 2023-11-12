import { inject, injectable} from "inversify";
import { NextFunction, Request, Response } from "express";
import  { ServiceTypes } from "../../business/dependencyresolvers/serviceInstanceFactory.config";
import { BaseController } from "./BaseAbstract.controller";
import { IElementService } from "../../business/abstract/IElement.service";
import { ElementDTO } from "../../core/dtos/concrete/ElementDTO";


@injectable()
export class ElementContoller extends BaseController<ElementDTO>{
    constructor(@inject<IElementService>(ServiceTypes.IElementService) service : IElementService) {
        super(service)
    }
} 