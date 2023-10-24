import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import Draw from '../../../core/models/concrete/Draw';
import Layer from '../../../core/models/concrete/Layer';

class DrawModel extends Model implements Draw
{
    id!:number
    name!: string;
    UserId!: number;
    Layers: Layer[] = [];
    readonly createdAt!: Date
    readonly updatedAt!: Date
}

DrawModel.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:DataTypes.STRING
},{
    sequelize: sequelize,
    modelName: 'Draw',
    tableName: 'draws'
})

export default DrawModel

