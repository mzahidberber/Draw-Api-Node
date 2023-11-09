import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import { AutoMap } from '@automapper/classes';
import {SSAngle} from '../../../core/models/concrete/SSAngle';

class SSAngleModel extends Model
{
    
    
    @AutoMap()
    Id!:number
    @AutoMap()
    Type!: string;
    @AutoMap()
    Value!: number;
    @AutoMap()
    ElementId!:number
    @AutoMap()
    readonly createdAt!: Date;
    @AutoMap()
    readonly updatedAt!: Date;
}

SSAngleModel.init({
    Id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        unique:true
    },
    Value:{
        type:DataTypes.DOUBLE,
        allowNull:false
    },
    Type:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize: sequelize,
    modelName: 'SSAngle',
    tableName: 'SSAngles'
})

export default SSAngleModel

