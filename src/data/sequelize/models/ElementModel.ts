import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import Element from '../../../core/models/concrete/Element';
import { injectable } from 'inversify';

class ElementModel extends Model implements Element
{
    id!:number
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

ElementModel.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
},{
    sequelize: sequelize,
    modelName: 'Element',
    tableName: 'elements'
})

export default ElementModel

