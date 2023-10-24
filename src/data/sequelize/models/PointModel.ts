import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import Point from '../../../core/models/concrete/Point';

class PointModel extends Model implements Point
{
    id!:number
    x!: number;
    y!: number;
    ElementId!:number
    readonly createdAt!: Date;
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

