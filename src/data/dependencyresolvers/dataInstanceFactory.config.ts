import { Container } from "inversify"
import "reflect-metadata";
import { ISSAngleRepository } from "../repository/abstract/ISSAngleRepository";
import { Draw } from "../../core/models/concrete/Draw";
import { ElementType } from "../../core/models/concrete/ElementType";
import { Layer } from "../../core/models/concrete/Layer";
import { Pen } from "../../core/models/concrete/Pen";
import { PenStyle } from "../../core/models/concrete/PenStyle";
import { Point } from "../../core/models/concrete/Point";
import { PointType } from "../../core/models/concrete/PointType";
import { Radius } from "../../core/models/concrete/Radius";
import { SSAngle } from "../../core/models/concrete/SSAngle";
import { User } from "../../core/models/concrete/User";
import { UserRefreshToken } from "../../core/models/concrete/UserRefreshToken";
import { UserRole } from "../../core/models/concrete/UserRole";
import { UserRoles } from "../../core/models/concrete/UserRoles";
import { Element } from "../../core/models/concrete/Element";
import { DataTypes } from "./DataTypes";
import { IDrawRepository } from "../repository/abstract/IDrawRepository";
import { IElementRepository } from "../repository/abstract/IElementRepository";
import { IElementTypeRepository } from "../repository/abstract/IElementTypeRepository";
import { ILayerRepository } from "../repository/abstract/ILayerRepository";
import { IPenRepository } from "../repository/abstract/IPenRepository";
import { IPenStyleRepository } from "../repository/abstract/IPenStyleRepository";
import { IPointRepository } from "../repository/abstract/IPointRepository";
import { IPointTypeRepository } from "../repository/abstract/IPointTypeRepository";
import { IRadiusRepository } from "../repository/abstract/IRadiusRepository";
import { IUserRepository } from "../repository/abstract/IUserRepository";
import { UserRepository } from "../repository/concrete/UserRepository";
import { SSAngleRepository } from "../repository/concrete/SSAngleRepository";
import { RadiusRepository } from "../repository/concrete/RadiusRepository";
import { PointTypeRepository } from "../repository/concrete/PointTypeRepository";
import { PointRepository } from "../repository/concrete/PointRepository";
import { PenStyleRepository } from "../repository/concrete/PenStyleRepository";
import { PenRepository } from "../repository/concrete/PenRepository";
import { LayerRepository } from "../repository/concrete/LayerRepository";
import { ElementTypeRepository } from "../repository/concrete/ElementTypeRepository";
import { ElementRepository } from "../repository/concrete/ElementRepository";
import { DrawRepository } from "../repository/concrete/DrawRepository";
import { Model, ModelCtor } from "sequelize-typescript";
import DrawModel from "../sequelize/models/DrawModel";
import ElementModel from "../sequelize/models/ElementModel";
import ElementTypeModel from "../sequelize/models/ElementTypeModel";
import LayerModel from "../sequelize/models/LayerModel";
import PenModel from "../sequelize/models/PenModel";
import PenStyleModel from "../sequelize/models/PenStyleModel";
import PointModel from "../sequelize/models/PointModel";
import PointTypeModel from "../sequelize/models/PointTypeModel";
import RadiusModel from "../sequelize/models/RadiusModel";
import SSAngleModel from "../sequelize/models/SSAngleModel";
import UserModel from "../sequelize/models/UserModel";


export const DataContainer = new Container()



//repositories
DataContainer.bind<IDrawRepository>(DataTypes.IDrawRepository).to(DrawRepository)
DataContainer.bind<IElementRepository>(DataTypes.IElementRepository).to(ElementRepository)
DataContainer.bind<IElementTypeRepository>(DataTypes.IElementTypeRepository).to(ElementTypeRepository)
DataContainer.bind<ILayerRepository>(DataTypes.ILayerRepository).to(LayerRepository)
DataContainer.bind<IPenRepository>(DataTypes.IPenRepository).to(PenRepository)
DataContainer.bind<IPenStyleRepository>(DataTypes.IPenStyleRepository).to(PenStyleRepository)
DataContainer.bind<IPointRepository>(DataTypes.IPointRepository).to(PointRepository)
DataContainer.bind<IPointTypeRepository>(DataTypes.IPointTypeRepository).to(PointTypeRepository)
DataContainer.bind<IRadiusRepository>(DataTypes.IRadiusRepository).to(RadiusRepository)
DataContainer.bind<ISSAngleRepository>(DataTypes.ISSAngleRepository).to(SSAngleRepository)
DataContainer.bind<IUserRepository>(DataTypes.IUserRepository).to(UserRepository)




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


