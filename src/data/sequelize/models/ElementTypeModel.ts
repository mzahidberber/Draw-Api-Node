import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import { AutoMap } from '@automapper/classes';
import {ElementType} from '../../../core/models/concrete/ElementType';
import ElementModel from './ElementModel';

class ElementTypeModel extends Model
{
    @AutoMap()
    Id!:number
    @AutoMap()
    Name!: string;
    @AutoMap(()=>[ElementModel])
    Elements: ElementModel[]=[]
    @AutoMap()
    readonly createdAt!: Date
    @AutoMap()
    readonly updatedAt!: Date
    
}

ElementTypeModel.init({
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
    }
},{
    sequelize: sequelize,
    modelName: 'ElementType',
    tableName: 'ElementTypes'
})

export default ElementTypeModel

