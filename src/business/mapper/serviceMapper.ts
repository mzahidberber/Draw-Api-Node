import { createMap, createMapper } from "@automapper/core";
import { DrawDTO } from "../../core/dtos/concrete/DrawDTO";
import {Draw} from "../../core/models/concrete/Draw";
import { classes } from "@automapper/classes";
import { Element } from "../../core/models/concrete/Element";
import { ElementDTO } from "../../core/dtos/concrete/ElementDTO";
import { Layer } from "../../core/models/concrete/Layer";
import { LayerDTO } from "../../core/dtos/concrete/LayerDTO";
import { Point } from "../../core/models/concrete/Point";
import { PointDTO } from "../../core/dtos/concrete/PointDTO";
import { Radius } from "../../core/models/concrete/Radius";
import { RadiusDTO } from "../../core/dtos/concrete/RadiusDTO";
import { SSAngle } from "../../core/models/concrete/SSAngle";
import { SSAngleDTO } from "../../core/dtos/concrete/SSAngleDTO";
import { ElementType } from "../../core/models/concrete/ElementType";
import { ElementTypeDTO } from "../../core/dtos/concrete/ElementTypeDTO";
import { Pen } from "../../core/models/concrete/Pen";
import { PenDTO } from "../../core/dtos/concrete/PenDTO";
import { PenStyle } from "../../core/models/concrete/PenStyle";
import { PenStyleDTO } from "../../core/dtos/concrete/PenStyleDTO";
import { PointType } from "../../core/models/concrete/PointType";
import { PointTypeDTO } from "../../core/dtos/concrete/PointTypeDTO";


export const serviceMapper = createMapper({
    strategyInitializer:classes()
});

createMap(serviceMapper,Draw,DrawDTO)
createMap(serviceMapper,DrawDTO,Draw)

createMap(serviceMapper,Element,ElementDTO)
createMap(serviceMapper,ElementDTO,Element)

createMap(serviceMapper,Layer,LayerDTO)
createMap(serviceMapper,LayerDTO,Layer)

createMap(serviceMapper,Point,PointDTO)
createMap(serviceMapper,PointDTO,Point)

createMap(serviceMapper,PointType,PointTypeDTO)
createMap(serviceMapper,PointTypeDTO,PointType)

createMap(serviceMapper,Radius,RadiusDTO)
createMap(serviceMapper,RadiusDTO,Radius)

createMap(serviceMapper,SSAngle,SSAngleDTO)
createMap(serviceMapper,SSAngleDTO,SSAngle)

createMap(serviceMapper,ElementType,ElementTypeDTO)
createMap(serviceMapper,ElementTypeDTO,ElementType)

createMap(serviceMapper,Pen,PenDTO)
createMap(serviceMapper,PenDTO,Pen)

createMap(serviceMapper,PenStyle,PenStyleDTO)
createMap(serviceMapper,PenStyleDTO,PenStyle)