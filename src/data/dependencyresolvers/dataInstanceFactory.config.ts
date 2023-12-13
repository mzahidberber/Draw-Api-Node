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
import { Element } from "../../core/models/concrete/Element";
import { DataLayerTypes } from "./DataTypes";
import { IDrawRepository } from "../repository/abstract/IDrawRepository";
import { IElementRepository } from "../repository/abstract/IElementRepository";
import { IElementTypeRepository } from "../repository/abstract/IElementTypeRepository";
import { ILayerRepository } from "../repository/abstract/ILayerRepository";
import { IPenRepository } from "../repository/abstract/IPenRepository";
import { IPenStyleRepository } from "../repository/abstract/IPenStyleRepository";
import { IPointRepository } from "../repository/abstract/IPointRepository";
import { IPointTypeRepository } from "../repository/abstract/IPointTypeRepository";
import { IRadiusRepository } from "../repository/abstract/IRadiusRepository";
import { SSSAngleRepository } from "../repository/concrete/sequelize/SSAngleRepository.sequelize";
import { SRadiusRepository } from "../repository/concrete/sequelize/RadiusRepository.sequelize";
import { SPointTypeRepository } from "../repository/concrete/sequelize/PointTypeRepository.sequelize";
import { SPointRepository } from "../repository/concrete/sequelize/PointRepository.sequelize";
import { SPenStyleRepository } from "../repository/concrete/sequelize/PenStyleRepository.sequelize";
import { SPenRepository } from "../repository/concrete/sequelize/PenRepository.sequelize";
import { SLayerRepository } from "../repository/concrete/sequelize/LayerRepository.sequelize";
import { SElementTypeRepository } from "../repository/concrete/sequelize/ElementTypeRepository.sequelize";
import { SElementRepository } from "../repository/concrete/sequelize/ElementRepository.sequelize";
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
import { EntityRepositoryAbstract } from "../repository/abstract/sequelize/EntityRepositoryAbstract";
import { MDrawModel } from "../mongoose/models/DrawModel.mongoose";
import { Model as MModel } from "mongoose";
import { MDrawRepository } from "../repository/concrete/mongoose/DrawRepository.mongoose";
import { SDrawRepository } from "../repository/concrete/sequelize/DrawRepository.sequelize";
import { Environment } from "../../core/environment/Environment";
import { MLayerModel } from "../mongoose/models/LayerModel.mongoose";
import { MElementModel } from "../mongoose/models/ElementModel.mongoose";
import { MElementTypeModel } from "../mongoose/models/ElementType.mongoose";
import { MPenModel } from "../mongoose/models/PenModel.mongoose";
import { MPenStyleModel } from "../mongoose/models/PenStyleModel.mongoose";
import { MPointModel } from "../mongoose/models/PointModel.mongoose";
import { MPointTypeModel } from "../mongoose/models/PointTypeModel.mongoose";
import { MRadiusModel } from "../mongoose/models/RadiusModel.mongoose";
import { MSSAngleModel } from "../mongoose/models/SSAngleModel.mongoose";
import { MLayerRepository } from "../repository/concrete/mongoose/LayerRepository.mongoose";

export const DataContainer = new Container()

if(Environment.DB_TYPE=="sql"){
    //repositories
    DataContainer.bind<IDrawRepository>(DataLayerTypes.IDrawRepository).to(SDrawRepository)
    DataContainer.bind<IElementRepository>(DataLayerTypes.IElementRepository).to(SElementRepository)
    DataContainer.bind<IElementTypeRepository>(DataLayerTypes.IElementTypeRepository).to(SElementTypeRepository)
    DataContainer.bind<ILayerRepository>(DataLayerTypes.ILayerRepository).to(SLayerRepository)
    DataContainer.bind<IPenRepository>(DataLayerTypes.IPenRepository).to(SPenRepository)
    DataContainer.bind<IPenStyleRepository>(DataLayerTypes.IPenStyleRepository).to(SPenStyleRepository)
    DataContainer.bind<IPointRepository>(DataLayerTypes.IPointRepository).to(SPointRepository)
    DataContainer.bind<IPointTypeRepository>(DataLayerTypes.IPointTypeRepository).to(SPointTypeRepository)
    DataContainer.bind<IRadiusRepository>(DataLayerTypes.IRadiusRepository).to(SRadiusRepository)
    DataContainer.bind<ISSAngleRepository>(DataLayerTypes.ISSAngleRepository).to(SSSAngleRepository)
    DataContainer.bind<EntityRepositoryAbstract<any>>(DataLayerTypes.EntityRepositoryAbstracy)
}
else if (Environment.DB_TYPE=="nosql"){
    DataContainer.bind<IDrawRepository>(DataLayerTypes.IDrawRepository).to(MDrawRepository)
    DataContainer.bind<IElementRepository>(DataLayerTypes.IElementRepository).to(SElementRepository)
    DataContainer.bind<IElementTypeRepository>(DataLayerTypes.IElementTypeRepository).to(SElementTypeRepository)
    DataContainer.bind<ILayerRepository>(DataLayerTypes.ILayerRepository).to(MLayerRepository)
    DataContainer.bind<IPenRepository>(DataLayerTypes.IPenRepository).to(SPenRepository)
    DataContainer.bind<IPenStyleRepository>(DataLayerTypes.IPenStyleRepository).to(SPenStyleRepository)
    DataContainer.bind<IPointRepository>(DataLayerTypes.IPointRepository).to(SPointRepository)
    DataContainer.bind<IPointTypeRepository>(DataLayerTypes.IPointTypeRepository).to(SPointTypeRepository)
    DataContainer.bind<IRadiusRepository>(DataLayerTypes.IRadiusRepository).to(SRadiusRepository)
    DataContainer.bind<ISSAngleRepository>(DataLayerTypes.ISSAngleRepository).to(SSSAngleRepository)
    DataContainer.bind<EntityRepositoryAbstract<any>>(DataLayerTypes.EntityRepositoryAbstracy)
}






//sequalize models
DataContainer.bind<ModelCtor<Model>>(DataLayerTypes.SDrawModel).toConstantValue(DrawModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataLayerTypes.SElementModel).toConstantValue(ElementModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataLayerTypes.SElementTypeModel).toConstantValue(ElementTypeModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataLayerTypes.SLayerModel).toConstantValue(LayerModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataLayerTypes.SPenModel).toConstantValue(PenModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataLayerTypes.SPenStyleModel).toConstantValue(PenStyleModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataLayerTypes.SPointModel).toConstantValue(PointModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataLayerTypes.SPointTypeModel).toConstantValue(PointTypeModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataLayerTypes.SRadiusModel).toConstantValue(RadiusModel as unknown as ModelCtor<Model>);
DataContainer.bind<ModelCtor<Model>>(DataLayerTypes.SSSAngleModel).toConstantValue(SSAngleModel as unknown as ModelCtor<Model>);

//mongosee models
DataContainer.bind<MModel<any>>(DataLayerTypes.MDrawModel).toConstantValue(MDrawModel);
DataContainer.bind<MModel<any>>(DataLayerTypes.MLayerModel).toConstantValue(MLayerModel);
DataContainer.bind<MModel<any>>(DataLayerTypes.MElementModel).toConstantValue(MElementModel);
DataContainer.bind<MModel<any>>(DataLayerTypes.MElementTypeModel).toConstantValue(MElementTypeModel);
DataContainer.bind<MModel<any>>(DataLayerTypes.MPenModel).toConstantValue(MPenModel);
DataContainer.bind<MModel<any>>(DataLayerTypes.MPenStyleModel).toConstantValue(MPenStyleModel);
DataContainer.bind<MModel<any>>(DataLayerTypes.MPointModel).toConstantValue(MPointModel);
DataContainer.bind<MModel<any>>(DataLayerTypes.MPointTypeModel).toConstantValue(MPointTypeModel);
DataContainer.bind<MModel<any>>(DataLayerTypes.MRadiusModel).toConstantValue(MRadiusModel);
DataContainer.bind<MModel<any>>(DataLayerTypes.MSSAngleModel).toConstantValue(MSSAngleModel);




//models
DataContainer.bind<new ()=> Draw>(DataLayerTypes.Draw).toConstantValue(Draw);
DataContainer.bind<new ()=> Element>(DataLayerTypes.Element).toConstantValue(Element);
DataContainer.bind<new ()=> ElementType>(DataLayerTypes.ElementType).toConstantValue(ElementType);
DataContainer.bind<new ()=> Layer>(DataLayerTypes.Layer).toConstantValue(Layer);
DataContainer.bind<new ()=> Pen>(DataLayerTypes.Pen).toConstantValue(Pen);
DataContainer.bind<new ()=> PenStyle>(DataLayerTypes.PenStyle).toConstantValue(PenStyle);
DataContainer.bind<new ()=> Point>(DataLayerTypes.Point).toConstantValue(Point);
DataContainer.bind<new ()=> PointType>(DataLayerTypes.PointType).toConstantValue(PointType);
DataContainer.bind<new ()=> Radius>(DataLayerTypes.Radius).toConstantValue(Radius);
DataContainer.bind<new ()=> SSAngle>(DataLayerTypes.SSAngle).toConstantValue(SSAngle);


