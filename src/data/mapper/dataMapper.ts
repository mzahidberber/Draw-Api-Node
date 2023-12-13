import { createMap, createMapper } from "@automapper/core";
import { sequelize } from "@automapper/sequelize";
import LayerModel from "../sequelize/models/LayerModel";
import ElementModel from "../sequelize/models/ElementModel";
import PointModel from "../sequelize/models/PointModel";
import DrawModel from "../sequelize/models/DrawModel";
import ElementTypeModel from "../sequelize/models/ElementTypeModel";
import PenModel from "../sequelize/models/PenModel";
import PenStyleModel from "../sequelize/models/PenStyleModel";
import PointTypeModel from "../sequelize/models/PointTypeModel";
import RadiusModel from "../sequelize/models/RadiusModel";
import SSAngleModel from "../sequelize/models/SSAngleModel";
import { Draw } from "../../core/models/concrete/Draw";
import { ElementType } from "../../core/models/concrete/ElementType";
import { Layer } from "../../core/models/concrete/Layer";
import { Pen } from "../../core/models/concrete/Pen";
import { PenStyle } from "../../core/models/concrete/PenStyle";
import { Point } from "../../core/models/concrete/Point";
import { PointType } from "../../core/models/concrete/PointType";
import { Radius } from "../../core/models/concrete/Radius";
import { SSAngle } from "../../core/models/concrete/SSAngle";
import { Element } from "../../core/models/concrete/Element";
import { MDrawModel } from "../mongoose/models/DrawModel.mongoose";
import { MLayerModel, layerSchema } from "../mongoose/models/LayerModel.mongoose";
export const dataMapper = createMapper({
    strategyInitializer:sequelize()
});

createMap(dataMapper,DrawModel,Draw)
createMap(dataMapper,ElementModel,Element)
createMap(dataMapper,ElementTypeModel,ElementType)
createMap(dataMapper,LayerModel,Layer)
createMap(dataMapper,PenModel,Pen)
createMap(dataMapper,PenStyleModel,PenStyle)
createMap(dataMapper,PointModel,Point)
createMap(dataMapper,PointTypeModel,PointType)
createMap(dataMapper,RadiusModel,Radius)
createMap(dataMapper,SSAngleModel,SSAngle)


