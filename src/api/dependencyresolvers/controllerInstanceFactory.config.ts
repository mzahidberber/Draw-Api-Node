import { Container } from "inversify"
import "reflect-metadata";
import { DrawContoller } from "../controllers/Draw.controller";
import { LayerContoller as LayerController } from "../controllers/Layer.controller";
import { ElementContoller } from "../controllers/Element.controller";
import { ServiceContainer } from "../../business/dependencyresolvers/serviceInstanceFactory.config";
import { PointController } from "../controllers/Point.controller";
import { RadiusController } from "../controllers/Radius.controller";
import { SSAngleController } from "../controllers/SSAngle.controller";

export const ControllerTypes = {
    DrawController: Symbol("DrawController"),
    LayerController: Symbol("LayerContoller"),
    ElementController: Symbol("ElementContoller"),
    PointController: Symbol("PointController"),
    RadiusController: Symbol("RadiusController"),
    SSAngleController: Symbol("SSAngleController")
}

export const ControllerContainer = new Container()
ControllerContainer.parent=ServiceContainer

//controller
ControllerContainer.bind<DrawContoller>(ControllerTypes.DrawController).to(DrawContoller).inTransientScope()
ControllerContainer.bind<LayerController>(ControllerTypes.LayerController).to(LayerController).inTransientScope()
ControllerContainer.bind<ElementContoller>(ControllerTypes.ElementController).to(ElementContoller).inTransientScope()
ControllerContainer.bind<PointController>(ControllerTypes.PointController).to(PointController).inTransientScope()
ControllerContainer.bind<RadiusController>(ControllerTypes.RadiusController).to(RadiusController).inTransientScope()
ControllerContainer.bind<SSAngleController>(ControllerTypes.SSAngleController).to(SSAngleController).inTransientScope()


