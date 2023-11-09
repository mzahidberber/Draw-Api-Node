import { Container } from "inversify"
import "reflect-metadata";
import { IDrawService } from "../abstract/IDrawService";
import { DrawManager } from "../concrete/DrawManager";
import { IElementService } from "../abstract/IElementService";
import { ElementManager } from "../concrete/ElementManager";

export const ServiceTypes = {
    IDrawService: Symbol("IDrawService"),
    IElementService:Symbol('IElementService'),
    
    //sequalize models
    Draw: Symbol("Draw"),

    //models
    DrawDTO:Symbol('DrawDTO'),
};

export const ServiceContainer = new Container()

//services
ServiceContainer.bind<IDrawService>(ServiceTypes.IDrawService).to(DrawManager).inTransientScope()
ServiceContainer.bind<IElementService>(ServiceTypes.IElementService).to(ElementManager).inTransientScope()
