import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'

class PointModel extends Model
{
    id!:number
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

PointModel.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
},{
    sequelize: sequelize,
    modelName: 'Point',
    tableName: 'points'
})

export default PointModel

