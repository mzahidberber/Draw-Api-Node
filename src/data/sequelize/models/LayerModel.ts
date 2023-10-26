import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import Layer from '../../../core/models/concrete/Layer';
import Element from '../../../core/models/concrete/Element';
import { AutoMap } from '@automapper/classes';
import ElementModel from './ElementModel';

class LayerModel extends Model implements Layer
{
    @AutoMap()
    id!:number
    @AutoMap()
    name!: string;
    @AutoMap()
    lock!: boolean;
    @AutoMap()
    visibility!: boolean;
    @AutoMap()
    thickness!: number;
    @AutoMap()
    numberOfElements!: number;
    @AutoMap()
    DrawId!: number;
    @AutoMap(()=>[ElementModel])
    Elements: ElementModel[]=[];
    @AutoMap()
    readonly createdAt!: Date
    @AutoMap()
    readonly updatedAt!: Date
}

LayerModel.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:DataTypes.STRING,
    lock:DataTypes.BOOLEAN,
    visibility:DataTypes.BOOLEAN,
    thickness:DataTypes.DOUBLE,
    numberOfElements:DataTypes.INTEGER
},{
    sequelize: sequelize,
    modelName: 'Layer',
    tableName: 'layers'
})

export default LayerModel

