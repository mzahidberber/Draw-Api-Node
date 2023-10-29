import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import { AutoMap } from '@automapper/classes';
import Radius from '../../../core/models/concrete/Radius';

class RadiusModel extends Model implements Radius
{
    
    @AutoMap()
    Id!:number
    @AutoMap()
    Value!: number;
    @AutoMap()
    ElementId!:number
    @AutoMap()
    readonly createdAt!: Date;
    @AutoMap()
    readonly updatedAt!: Date;
}

RadiusModel.init({
    Id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        unique:true
    },
    Value:{
        type:DataTypes.DOUBLE,
        allowNull:false
    }
},{
    sequelize: sequelize,
    modelName: 'Radius',
    tableName: 'Radiuses'
})

export default RadiusModel

