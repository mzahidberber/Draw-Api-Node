import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import Layer from '../../../core/models/concrete/Layer';

class LayerModel extends Model implements Layer
{
    id!:number
    name!: string;
    lock!: boolean;
    visibility!: boolean;
    thickness!: number;
    numberOfElements!: number;
    DrawId!: number;
    Elements: Element[]=[];
    readonly createdAt!: Date
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

