import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import {Draw} from '../../../core/models/concrete/Draw';
import { AutoMap } from '@automapper/classes';
import LayerModel from './LayerModel';

class DrawModel extends Model implements Draw
{
    @AutoMap()
    Id!:number
    @AutoMap()
    Name!: string;
    @AutoMap()
    UserId!: string;
    @AutoMap(()=>[LayerModel])
    Layers: LayerModel[]=[]
    @AutoMap()
    NumberOfLayerElements!:number
    @AutoMap()
    readonly createdAt!: Date
    @AutoMap()
    readonly updatedAt!: Date
}

DrawModel.init({
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
    NumberOfLayerElements:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
    },
},{
    sequelize: sequelize,
    modelName: 'Draw',
    tableName: 'Draws'
})

export default DrawModel

