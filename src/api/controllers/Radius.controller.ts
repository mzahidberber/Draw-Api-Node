import { inject, injectable } from "inversify";
import { BaseController } from "./BaseAbstract.controller";
import { ServiceTypes } from "../../business/dependencyresolvers/serviceInstanceFactory.config";
import { RadiusDTO } from "../../core/dtos/concrete/RadiusDTO";
import { IRadiusService } from "../../business/abstract/IRadius.service";

@injectable()
export class RadiusController extends BaseController<RadiusDTO>{
    constructor(@inject<IRadiusService>(ServiceTypes.IRadiusService) service : IRadiusService) {
        super(service)
    }
} 