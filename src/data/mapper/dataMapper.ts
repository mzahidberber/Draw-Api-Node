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

export const dataMapper = createMapper({
    strategyInitializer:sequelize()
});

createMap(dataMapper,LayerModel,Layer)
createMap(dataMapper,ElementModel,Element)
createMap(dataMapper,PointModel,Point)
createMap(dataMapper,DrawModel,Draw)
createMap(dataMapper,UserModel,User)