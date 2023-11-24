import { DataTypes,Model } from 'sequelize'
import { AutoMap } from '@automapper/classes';
import { SequelizeConnect } from '../SequelizeConnect';
import ElementModel from './ElementModel';

class RadiusModel extends Model 
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

export function initModel(){
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
        sequelize: SequelizeConnect.getInstance().sequelize,
        modelName: 'Radius',
        tableName: 'Radiuses'
    })
}

export function createReleationship(){
    RadiusModel.belongsTo(ElementModel,{
        foreignKey:{
            allowNull:false
        }
    })
    ElementModel.hasMany(RadiusModel)
}



export default RadiusModel

