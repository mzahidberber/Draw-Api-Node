import { DataTypes,Model } from 'sequelize'
import { AutoMap } from '@automapper/classes';
import {SSAngle} from '../../../core/models/concrete/SSAngle';
import { SequelizeConnect } from '../SequelizeConnect';
import ElementModel from './ElementModel';

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

export function initModel(){
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
        sequelize: SequelizeConnect.getInstance().sequelize,
        modelName: 'SSAngle',
        tableName: 'SSAngles'
    })
}

export function createReleationship(){
    SSAngleModel.belongsTo(ElementModel,{
        foreignKey:{
            allowNull:false
        }
    })
    ElementModel.hasMany(SSAngleModel)
}



export default SSAngleModel

