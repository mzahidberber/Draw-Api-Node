import { DataTypes,Model } from 'sequelize'
import { AutoMap } from '@automapper/classes';
import {Layer} from '../../../core/models/concrete/Layer';
import ElementModel from './ElementModel';
import { SequelizeConnect } from '../SequelizeConnect';
import UserModel from './UserModel';
import PenStyleModel from './PenStyleModel';

class PenModel extends Model 
{
    @AutoMap()
    Id!:number
    @AutoMap()
    Name!: string;
    @AutoMap()
    Red!: number;
    @AutoMap()
    Blue!: number;
    @AutoMap()
    Green!: number;
    @AutoMap()
    UserId!: string;
    @AutoMap()
    PenStyleId!: number;
    @AutoMap()
    Layers: Layer[]=[]
    @AutoMap(()=>[ElementModel])
    Elements: ElementModel[]=[]
    @AutoMap()
    readonly createdAt!: Date
    @AutoMap()
    readonly updatedAt!: Date
    
}

export function initModel(){
    PenModel.init({
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
        },
        Red:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Blue:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Green:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
    },{
        sequelize: SequelizeConnect.getInstance().sequelize,
        modelName: 'Pen',
        tableName: 'Pens'
    })
}

export function createReleationship(){
    PenModel.belongsTo(UserModel,{
        foreignKey:{
            allowNull:false
        }
    })
    UserModel.hasMany(PenModel)
    
    PenModel.belongsTo(PenStyleModel,{
        foreignKey:{
            allowNull:false
        }
    })
    PenStyleModel.hasMany(PenModel)
}



export default PenModel

