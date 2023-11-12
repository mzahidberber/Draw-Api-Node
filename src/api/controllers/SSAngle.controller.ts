import { inject, injectable } from "inversify";
import { BaseController } from "./BaseAbstract.controller";
import { ServiceTypes } from "../../business/dependencyresolvers/serviceInstanceFactory.config";
import { SSAngleDTO } from "../../core/dtos/concrete/SSAngleDTO";
import { ISSAngleService } from "../../business/abstract/ISSAngle.service";

@injectable()
export class SSAngleController extends BaseController<SSAngleDTO>{
    constructor(@inject<ISSAngleService>(ServiceTypes.ISSAngleService) service : ISSAngleService) {
        super(service)
    }
} 