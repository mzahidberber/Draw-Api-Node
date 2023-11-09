import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import {Point} from '../../../core/models/concrete/Point';
import { AutoMap } from '@automapper/classes';

class PointModel extends Model
{
    @AutoMap()
    Id!:number
    @AutoMap()
    X!: number;
    @AutoMap()
    Y!: number;
    @AutoMap()
    ElementId!:number
    @AutoMap()
    PointTypeId!: number;
    @AutoMap()
    readonly createdAt!: Date;
    @AutoMap()
    readonly updatedAt!: Date;
}

PointModel.init({
    Id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        unique:true
    },
    X:{
        type:DataTypes.DOUBLE,
        allowNull:false
    },
    Y:{
        type:DataTypes.DOUBLE,
        allowNull:false
    },
},{
    sequelize: sequelize,
    modelName: 'Point',
    tableName: 'Points'
})

export default PointModel

