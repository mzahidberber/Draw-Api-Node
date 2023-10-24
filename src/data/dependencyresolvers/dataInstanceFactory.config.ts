import { Container } from "inversify"
import "reflect-metadata";
import { IElementRepository } from "../repository/abstract/IElementRepository";
import ElementRepository from "../repository/concrete/ElementRepository";
import TYPES from './data-types'
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



const container = new Container()
//models
container.bind<ModelCtor<Model>>(TYPES.ElementModel).toConstantValue(ElementModel as unknown as ModelCtor<Model>);
container.bind<ModelCtor<Model>>(TYPES.PointModel).toConstantValue(PointModel as unknown as ModelCtor<Model>);
container.bind<ModelCtor<Model>>(TYPES.UserModel).toConstantValue(UserModel as unknown as ModelCtor<Model>);
container.bind<ModelCtor<Model>>(TYPES.DrawModel).toConstantValue(DrawModel as unknown as ModelCtor<Model>);
container.bind<ModelCtor<Model>>(TYPES.LayerModel).toConstantValue(LayerModel as unknown as ModelCtor<Model>);


//repositories
container.bind<IElementRepository>(TYPES.ElementRepository).to(ElementRepository)
container.bind<IPointRepository>(TYPES.PointRepository).to(PointRepository)
container.bind<IUserRepository>(TYPES.UserRepository).to(UserRepository)
container.bind<IDrawRepository>(TYPES.DrawRepository).to(DrawRepository)
container.bind<ILayerRepository>(TYPES.LayerRepository).to(LayerRepository)





export default container;