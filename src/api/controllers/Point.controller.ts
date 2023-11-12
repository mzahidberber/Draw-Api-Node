import { inject, injectable } from "inversify";
import { IPointService } from "../../business/abstract/IPoint.service";
import { PointDTO } from "../../core/dtos/concrete/PointDTO";
import { BaseController } from "./BaseAbstract.controller";
import { ServiceTypes } from "../../business/dependencyresolvers/serviceInstanceFactory.config";

@injectable()
export class PointController extends BaseController<PointDTO>{
    constructor(@inject<IPointService>(ServiceTypes.IPointService) service : IPointService) {
        super(service)
    }
} 