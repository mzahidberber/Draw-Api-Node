import { Container } from "inversify"
import "reflect-metadata";
import { IElementRepository } from "../repository/abstract/IElementRepository";
import ElementRepository from "../repository/concrete/ElementRepository";
import DataTypes from './DataTypes'
import { Model, ModelCtor } from "sequelize-typescript";
import PointModel from "../sequelize/models/PointModel";
import { IPointRepository } from "../repository/abstract/IPointRepository";
import PointRepository from "../repository/concrete/PointRepository";
import ElementModel from "../sequelize/models/ElementModel";
import UserModel from "../sequelize/models/UserModel";
import DrawModel from "../sequelize/models/DrawModel";
import LayerModel from "../sequelize/models/LayerModel";
import { IUserRepository } from "../repository/abstract/IUserRepository";
import UserRepository from "../repository/concrete/UserRepository";
import { IDrawRepository } from "../repository/abstract/IDrawRepository";
import DrawRepository from "../repository/concrete/DrawRepository";
import { ILayerRepository } from "../repository/abstract/ILayerRepository";
import LayerRepository from "../repository/concrete/LayerRepository";
import Layer from "../../core/models/concrete/Layer";
import Element from "../../core/models/concrete/Element";
import Draw from "../../core/models/concrete/Draw";
import Point from "../../core/models/concrete/Point";
import User from "../../core/models/concrete/User";
import ElementType from "../../core/models/concrete/ElementType";
import Pen from "../../core/models/concrete/Pen";
import PenStyle from "../../core/models/concrete/PenStyle";
import PointType from "../../core/models/concrete/PointType";
import Radius from "../../core/models/concrete/Radius";
import SSAngle from "../../core/models/concrete/SSAngle";
import UserRefreshToken from "../../core/models/concrete/UserRefreshToken";
import UserRole from "../../core/models/concrete/UserRole";
import UserRoles from "../../core/models/concrete/UserRoles";
import ElementTypeModel from "../sequelize/models/ElementTypeModel";
import PenModel from "../sequelize/models/PenModel";
import PenStyleModel from "../sequelize/models/PenStyleModel";
import PointTypeModel from "../sequelize/models/PointTypeModel";
import RadiusModel from "../sequelize/models/RadiusModel";
import SSAngleModel from "../sequelize/models/SSAngleModel";
import { IElementTypeRepository } from "../repository/abstract/IElementTypeRepository";
import ElementTypeRepository from "../repository/concrete/ElementTypeRepository";
import { IPenRepository } from "../repository/abstract/IPenRepository";
import PenRepository from "../repository/concrete/PenRepository";
import { IPenStyleRepository } from "../repository/abstract/IPenStyleRepository";
import PenStyleRepository from "../repository/concrete/PenStyleRepository";
import PointTypeRepository from "../repository/concrete/PointTypeRepository";
import { IPointTypeRepository } from "../repository/abstract/IPointTypeRepository";
import { IRadiusRepository } from "../repository/abstract/IRadiusRepository";
import RadiusRepository from "../repository/concrete/RadiusRepository";
import SSAngleRepository from "../repository/concrete/SSAngleRepository";
import { ISSAngleRepository } from "../repository/abstract/ISSAngleRepository";



const DataContainer = new Container()



//repositories
DataContainer.bind<IDrawRepository>(DataTypes.DrawRepository).to(DrawRepository)
DataContainer.bind<IElementRepository>(DataTypes.ElementRepository).to(ElementRepository)
DataContainer.bind<IElementTypeRepository>(DataTypes.ElementTypeRepository).to(ElementTypeRepository)
DataContainer.bind<ILayerRepository>(DataTypes.LayerRepository).to(LayerRepository)
DataContainer.bind<IPenRepository>(DataTypes.PenRepository).to(PenRepository)
DataContainer.bind<IPenStyleRepository>(DataTypes.PenStyleRepository).to(PenStyleRepository)
DataContainer.bind<IPointRepository>(DataTypes.PointRepository).to(PointRepository)
DataContainer.bind<IPointTypeRepository>(DataTypes.PointTypeRepository).to(PointTypeRepository)
DataContainer.bind<IRadiusRepository>(DataTypes.RadiusRepository).to(RadiusRepository)
DataContainer.bind<ISSAngleRepository>(DataTypes.SSAngleRepository).to(SSAngleRepository)
DataContainer.bind<IUserRepository>(DataTypes.UserRepository).to(UserRepository)




//sequalize models
DataContainer.bind<ModelCtor<Model>>(DataTypes.DrawModel).toConstantValue(DrawModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataTypes.ElementModel).toConstantValue(ElementModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataTypes.ElementTypeModel).toConstantValue(ElementTypeModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataTypes.LayerModel).toConstantValue(LayerModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataTypes.PenModel).toConstantValue(PenModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataTypes.PenStyleModel).toConstantValue(PenStyleModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataTypes.PointModel).toConstantValue(PointModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataTypes.PointTypeModel).toConstantValue(PointTypeModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataTypes.RadiusModel).toConstantValue(RadiusModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataTypes.SSAngleModel).toConstantValue(SSAngleModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataTypes.UserModel).toConstantValue(UserModel as unknown as ModelCtor<Model>);



//models
DataContainer.bind<new ()=> Draw>(DataTypes.Draw).toConstantValue(Draw);
DataContainer.bind<new ()=> Element>(DataTypes.Element).toConstantValue(Element);
DataContainer.bind<new ()=> ElementType>(DataTypes.ElementType).toConstantValue(ElementType);
DataContainer.bind<new ()=> Layer>(DataTypes.Layer).toConstantValue(Layer);
DataContainer.bind<new ()=> Pen>(DataTypes.Pen).toConstantValue(Pen);
DataContainer.bind<new ()=> PenStyle>(DataTypes.PenStyle).toConstantValue(PenStyle);
DataContainer.bind<new ()=> Point>(DataTypes.Point).toConstantValue(Point);
DataContainer.bind<new ()=> PointType>(DataTypes.PointType).toConstantValue(PointType);
DataContainer.bind<new ()=> Radius>(DataTypes.Radius).toConstantValue(Radius);
DataContainer.bind<new ()=> SSAngle>(DataTypes.SSAngle).toConstantValue(SSAngle);
DataContainer.bind<new ()=> User>(DataTypes.User).toConstantValue(User);
DataContainer.bind<new ()=> UserRefreshToken>(DataTypes.UserRefreshToken).toConstantValue(UserRefreshToken);
DataContainer.bind<new ()=> UserRole>(DataTypes.UserRole).toConstantValue(UserRole);
DataContainer.bind<new ()=> UserRoles>(DataTypes.UserRoles).toConstantValue(UserRoles);





export default DataContainer;