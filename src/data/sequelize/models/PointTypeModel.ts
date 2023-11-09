import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import { AutoMap } from '@automapper/classes';
import {PointType} from '../../../core/models/concrete/PointType';
import PointModel from './PointModel';

class PointTypeModel extends Model 
{
    
    @AutoMap()
    Id!:number
    @AutoMap()
    Name!: string;
    @AutoMap(()=>[PointModel])
    Points: PointModel[];
    @AutoMap()
    readonly createdAt!: Date;
    @AutoMap()
    readonly updatedAt!: Date;

    constructor() {
        super();
        this.Points=[]
    }
    
}

PointTypeModel.init({
    Id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        unique:true
    },
    Name:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    sequelize: sequelize,
    modelName: 'PointType',
    tableName: 'PointTypes'
})

export default PointTypeModel

