import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import {Layer} from '../../../core/models/concrete/Layer';
import { AutoMap } from '@automapper/classes';
import ElementModel from './ElementModel';

class LayerModel extends Model
{
    
    @AutoMap()
    Id!:number
    @AutoMap()
    Name!: string;
    @AutoMap()
    Lock!: boolean;
    @AutoMap()
    Visibility!: boolean;
    @AutoMap()
    Thickness!: number;
    @AutoMap()
    NumberOfElements!: number;
    @AutoMap()
    DrawId!: number;
    @AutoMap()
    PenId!: number;
    @AutoMap(()=>[ElementModel])
    Elements: ElementModel[]=[]
    @AutoMap()
    readonly createdAt!: Date
    @AutoMap()
    readonly updatedAt!: Date

    
}

LayerModel.init({
    Id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        unique:true
    },
    Name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Lock:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    Visibility:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    Thickness:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
    NumberOfElements:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
    }
},{
    sequelize: sequelize,
    modelName: 'Layer',
    tableName: 'Layers'
})

export default LayerModel

