import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import Element from '../../../core/models/concrete/Element';
import { AutoMap } from '@automapper/classes';
import PointModel from './PointModel';

class ElementModel extends Model implements Element
{
    @AutoMap()
    id!:number
    @AutoMap()
    LayerId!:number
    @AutoMap(()=>[PointModel])
    Points: PointModel[]=[]
    @AutoMap()
    readonly createdAt!: Date
    @AutoMap()
    readonly updatedAt!: Date
}

ElementModel.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    }
},{
    sequelize: sequelize,
    modelName: 'Element',
    tableName: 'elements'
})

export default ElementModel

