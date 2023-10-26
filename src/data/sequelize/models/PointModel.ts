import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import Point from '../../../core/models/concrete/Point';
import { AutoMap } from '@automapper/classes';

class PointModel extends Model implements Point
{
    @AutoMap()
    id!:number
    @AutoMap()
    x!: number;
    @AutoMap()
    y!: number;
    @AutoMap()
    ElementId!:number
    @AutoMap()
    readonly createdAt!: Date;
    @AutoMap()
    readonly updatedAt!: Date;
}

PointModel.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    x:DataTypes.DOUBLE,
    y:DataTypes.DOUBLE,
},{
    sequelize: sequelize,
    modelName: 'Point',
    tableName: 'points'
})

export default PointModel

