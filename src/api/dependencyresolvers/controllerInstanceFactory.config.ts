import { Container } from "inversify"
import "reflect-metadata";
import { DrawContoller } from "../controllers/Draw.controller";

export let ContollerTypes = {
    DrawController: Symbol("DrawController"),
}

export const ControllerContainer = new Container()

//services
ControllerContainer.bind<DrawContoller>(ContollerTypes.DrawController).to(DrawContoller).inRequestScope()
