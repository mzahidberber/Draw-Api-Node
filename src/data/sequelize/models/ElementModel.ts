import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import Element from '../../../core/models/concrete/Element';
import { AutoMap } from '@automapper/classes';
import PointModel from './PointModel';
import SSAngleModel from './SSAngleModel';
import RadiusModel from './RadiusModel';

class ElementModel extends Model implements Element
{
    @AutoMap()
    Id!:number
    @AutoMap()
    LayerId!:number
    @AutoMap()
    PenId!: number;
    @AutoMap()
    TypeId!: number;
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

