import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import {Element} from '../../../core/models/concrete/Element';
import { AutoMap } from '@automapper/classes';
import PointModel from './PointModel';
import SSAngleModel from './SSAngleModel';
import RadiusModel from './RadiusModel';
import LayerModel from './LayerModel';

class ElementModel extends Model
{
    @AutoMap()
    Id!:number
    @AutoMap(()=>LayerModel)
    Layer!:LayerModel
    @AutoMap()
    LayerId!:number
    @AutoMap()
    PenId!: number;
    @AutoMap()
    ElementTypeId!: number;
    @AutoMap(()=>[PointModel])
    Points: PointModel[]=[]
    @AutoMap(()=>[SSAngleModel])
    SSAngles: SSAngleModel[]=[]
    @AutoMap(()=>[RadiusModel])
    Radiuses: RadiusModel[]=[]
    @AutoMap()
    readonly createdAt!: Date
    @AutoMap()
    readonly updatedAt!: Date
}

ElementModel.init({
    Id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        unique:true
    }
},{
    sequelize: sequelize,
    modelName: 'Element',
    tableName: 'Elements'
})

export default ElementModel

