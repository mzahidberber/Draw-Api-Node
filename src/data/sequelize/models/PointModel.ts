import { DataTypes,Model } from 'sequelize'
import { SequelizeConnect } from '../SequelizeConnect'
import { AutoMap } from '@automapper/classes';
import ElementModel from './ElementModel';
import PointTypeModel from './PointTypeModel';
class PointModel extends Model
{
    @AutoMap()
    Id!:number
    @AutoMap()
    X!: number;
    @AutoMap()
    Y!: number;
    @AutoMap()
    ElementId!:number
    @AutoMap()
    PointTypeId!: number;
    @AutoMap()
    readonly createdAt!: Date;
    @AutoMap()
    readonly updatedAt!: Date;
}

export function initModel(){
    PointModel.init({
        Id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true,
            unique:true
        },
        X:{
            type:DataTypes.DOUBLE,
            allowNull:false
        },
        Y:{
            type:DataTypes.DOUBLE,
            allowNull:false
        },
    },{
        sequelize:SequelizeConnect.getInstance().sequelize,
        modelName: 'Point',
        tableName: 'Points'
    })
}

export function createReleationship(){
    PointModel.belongsTo(ElementModel,{
        foreignKey:{
            allowNull:false
        }
    })
    ElementModel.hasMany(PointModel)
    
    PointModel.belongsTo(PointTypeModel,{
        foreignKey:{
            allowNull:false
        }
    })
    PointTypeModel.hasMany(PointModel)
}



export default PointModel

