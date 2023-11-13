import { inject, injectable} from "inversify";
import { NextFunction, Request, Response } from "express";
import  { ServiceContainer, ServiceTypes } from "../../../business/dependencyresolvers/serviceInstanceFactory.config";
import {  AutorizeClass, AutorizeMethod } from "../../jwt/Authendication";
import { ILayerService } from "../../../business/abstract/ILayer.service";
import { BaseController } from "../abstract/BaseAbstract.controller";
import { LayerDTO } from "../../../core/dtos/concrete/LayerDTO";


@injectable()
export class LayerContoller extends BaseController<LayerDTO>{
    constructor(@inject<ILayerService>(ServiceTypes.ILayerService) service : ILayerService) {
        super(service)
    }
} 