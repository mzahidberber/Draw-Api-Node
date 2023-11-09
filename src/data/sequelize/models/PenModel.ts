import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import { AutoMap } from '@automapper/classes';
import {Pen} from '../../../core/models/concrete/Pen';
import {Layer} from '../../../core/models/concrete/Layer';
import ElementModel from './ElementModel';

class PenModel extends Model 
{
    @AutoMap()
    Id!:number
    @AutoMap()
    Name!: string;
    @AutoMap()
    Red!: number;
    @AutoMap()
    Blue!: number;
    @AutoMap()
    Green!: number;
    @AutoMap()
    UserId!: string;
    @AutoMap()
    PenStyleId!: number;
    @AutoMap()
    Layers: Layer[]=[]
    @AutoMap(()=>[ElementModel])
    Elements: ElementModel[]=[]
    @AutoMap()
    readonly createdAt!: Date
    @AutoMap()
    readonly updatedAt!: Date
    
}

PenModel.init({
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
    Red:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    Blue:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    Green:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
},{
    sequelize: sequelize,
    modelName: 'Pen',
    tableName: 'Pens'
})

export default PenModel

