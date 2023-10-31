import { Container } from "inversify"
import "reflect-metadata";
import { IDrawService } from "../abstract/IDrawService";
import { DrawManager } from "../concrete/DrawManager";

export const ServiceTypes = {
    IDrawService: Symbol("IDrawService"),
    
    
    //sequalize models
    Draw: Symbol("Draw"),

    //models
    DrawDTO:Symbol('DrawDTO'),
};

export const ServiceContainer = new Container()

//services
ServiceContainer.bind<IDrawService>(ServiceTypes.IDrawService).to(DrawManager).inTransientScope()
