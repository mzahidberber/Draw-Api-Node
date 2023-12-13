import { DataTypes,Model } from 'sequelize'
import { AutoMap } from '@automapper/classes';
import {  SequelizeConnect } from '../SequelizeConnect';
import PointModel from './PointModel';
import SSAngleModel from './SSAngleModel';
import RadiusModel from './RadiusModel';
import LayerModel from './LayerModel';
import PenModel from './PenModel';
import ElementTypeModel from './ElementTypeModel';
class ElementModel extends Model
{
    @AutoMap()
    id!:string
    @AutoMap(()=>LayerModel)
    Layer!:LayerModel
    @AutoMap()
    LayerId!:string
    @AutoMap()
    PenId!: string;
    @AutoMap()
    ElementTypeId!: string;
    @AutoMap(()=>[PointModel])
    Points: PointModel[]=[]
    @AutoMap(()=>[SSAngleModel])
    SSAngles: SSAngleModel[]=[]
    @AutoMap(()=>[RadiusModel])
    Radiuses: RadiusModel[]=[]
    @AutoMap()
    readonly createdAt!: Date
    @AutoMap()
    readonly updatedAt!: Date
}

export function initModel(){
    ElementModel.init({
        id:{
            type:DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true,
            unique:true
        }
    },{
        sequelize: SequelizeConnect.getInstance().sequelize,
        modelName: 'Element',
        tableName: 'Elements'
    })
}

export function createReleationship(){
    ElementModel.belongsTo(LayerModel,{
        foreignKey:{
            allowNull:false
        }
    })
    LayerModel.hasMany(ElementModel)
    
    ElementModel.belongsTo(PenModel,{
        foreignKey:{
            allowNull:false
        }
    })
    PenModel.hasMany(ElementModel)
    
    ElementModel.belongsTo(ElementTypeModel,{
        foreignKey:{
            allowNull:false
        }
    })
    ElementTypeModel.hasMany(ElementModel)
}



export default ElementModel

