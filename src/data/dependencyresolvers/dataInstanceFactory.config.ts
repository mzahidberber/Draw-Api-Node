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



const DataContainer = new Container()
//models
DataContainer.bind<ModelCtor<Model>>(DataTypes.ElementModel).toConstantValue(ElementModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataTypes.PointModel).toConstantValue(PointModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataTypes.UserModel).toConstantValue(UserModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataTypes.DrawModel).toConstantValue(DrawModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataTypes.LayerModel).toConstantValue(LayerModel as unknown as ModelCtor<Model>);

DataContainer.bind<new ()=> Layer>(DataTypes.Layer).toConstantValue(Layer);
DataContainer.bind<new ()=> Element>(DataTypes.Element).toConstantValue(Element);
DataContainer.bind<new ()=> Draw>(DataTypes.Draw).toConstantValue(Draw);
DataContainer.bind<new ()=> Point>(DataTypes.Point).toConstantValue(Point);
DataContainer.bind<new ()=> User>(DataTypes.User).toConstantValue(User);

//repositories
DataContainer.bind<IElementRepository>(DataTypes.ElementRepository).to(ElementRepository)
DataContainer.bind<IPointRepository>(DataTypes.PointRepository).to(PointRepository)
DataContainer.bind<IUserRepository>(DataTypes.UserRepository).to(UserRepository)
DataContainer.bind<IDrawRepository>(DataTypes.DrawRepository).to(DrawRepository)
DataContainer.bind<ILayerRepository>(DataTypes.LayerRepository).to(LayerRepository)





export default DataContainer;