import { Container } from "inversify"
import "reflect-metadata";
import { IDrawService } from "../abstract/IDraw.service";
import { DrawManager } from "../concrete/Draw.manager";
import { IElementService } from "../abstract/IElement.service";
import { ElementManager } from "../concrete/Element.manager";
import { IElementTypeService } from "../abstract/IElementType.service";
import { ElementTypeManager } from "../concrete/ElementType.manager";
import { ILayerService } from "../abstract/ILayer.service";
import { LayerManager } from "../concrete/Layer.manager";
import { PenManager } from "../concrete/Pen.manager";
import { IPenService } from "../abstract/IPen.service";
import { PointManager } from "../concrete/Point.manager";
import { RadiusManager } from "../concrete/Radius.manager";
import { SSAngleManager } from "../concrete/SSAngle.manager";
import { ISSAngleService } from "../abstract/ISSAngle.service";
import { IRadiusService } from "../abstract/IRadius.service";
import { IPointService } from "../abstract/IPoint.service";
import { IDrawLayerService } from "../abstract/IDrawLayer.service";
import { DrawLayerManager } from "../concrete/DrawLayer.manager";

export const ServiceTypes = {
    IDrawService: Symbol("IDrawService"),
    IElementService:Symbol('IElementService'),
    IElementTypeService:Symbol('IElementTypeService'),
    ILayerService:Symbol('ILayerService'),
    IPenService:Symbol('IPenService'),
    IPointService:Symbol('IPointService'),
    IRadiusService:Symbol('IRadiusService'),
    ISSAngleService:Symbol('ISSAngleService'),
    IDrawLayerService:Symbol('IDrawLayerService'),
    
    //sequalize models
    Draw: Symbol("Draw"),

    //models
    DrawDTO:Symbol('DrawDTO'),
};

export const ServiceContainer = new Container()

//services
ServiceContainer.bind<IDrawService>(ServiceTypes.IDrawService).to(DrawManager).inTransientScope()
ServiceContainer.bind<IElementService>(ServiceTypes.IElementService).to(ElementManager).inTransientScope()
ServiceContainer.bind<IElementTypeService>(ServiceTypes.IElementTypeService).to(ElementTypeManager).inTransientScope()
ServiceContainer.bind<ILayerService>(ServiceTypes.ILayerService).to(LayerManager).inTransientScope()
ServiceContainer.bind<IPenService>(ServiceTypes.IPenService).to(PenManager).inTransientScope()
ServiceContainer.bind<IPointService>(ServiceTypes.IPointService).to(PointManager).inTransientScope()
ServiceContainer.bind<IRadiusService>(ServiceTypes.IRadiusService).to(RadiusManager).inTransientScope()
ServiceContainer.bind<ISSAngleService>(ServiceTypes.ISSAngleService).to(SSAngleManager).inTransientScope()
ServiceContainer.bind<IDrawLayerService>(ServiceTypes.IDrawLayerService).to(DrawLayerManager).inTransientScope()
