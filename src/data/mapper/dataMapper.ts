import { createMap, createMapper } from "@automapper/core";
import { sequelize } from "@automapper/sequelize";
import LayerModel from "../sequelize/models/LayerModel";
import Layer from "../../core/models/concrete/Layer";
import Element from "../../core/models/concrete/Element";
import ElementModel from "../sequelize/models/ElementModel";
import PointModel from "../sequelize/models/PointModel";
import Point from "../../core/models/concrete/Point";
import DrawModel from "../sequelize/models/DrawModel";
import Draw from "../../core/models/concrete/Draw";
import UserModel from "../sequelize/models/UserModel";
import User from "../../core/models/concrete/User";
import ElementTypeModel from "../sequelize/models/ElementTypeModel";
import ElementType from "../../core/models/concrete/ElementType";
import PenModel from "../sequelize/models/PenModel";
import Pen from "../../core/models/concrete/Pen";
import PenStyle from "../../core/models/concrete/PenStyle";
import PenStyleModel from "../sequelize/models/PenStyleModel";
import PointTypeModel from "../sequelize/models/PointTypeModel";
import PointType from "../../core/models/concrete/PointType";
import Radius from "../../core/models/concrete/Radius";
import RadiusModel from "../sequelize/models/RadiusModel";
import SSAngleModel from "../sequelize/models/SSAngleModel";
import SSAngle from "../../core/models/concrete/SSAngle";

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
createMap(dataMapper,UserModel,User)