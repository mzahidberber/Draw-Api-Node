import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import Element from '../../../core/models/concrete/Element';

class ElementModel extends Model implements Element
{
    id!:number
    LayerId!:number
    readonly createdAt!: Date
    readonly updatedAt!: Date
}

ElementModel.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    }
},{
    sequelize: sequelize,
    modelName: 'Element',
    tableName: 'elements'
})

export default ElementModel

