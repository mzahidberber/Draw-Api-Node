import { DataTypes,Model } from 'sequelize'
import { AutoMap } from '@automapper/classes';
import {Layer} from '../../../core/models/concrete/Layer';
import ElementModel from './ElementModel';
import { SequelizeConnect } from '../SequelizeConnect';
import PenStyleModel from './PenStyleModel';

class PenModel extends Model 
{
    @AutoMap()
    id!:string
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
    PenStyleId!: string;
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
        id:{
            type:DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
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
    
    PenModel.belongsTo(PenStyleModel,{
        foreignKey:{
            allowNull:false
        }
    })
    PenStyleModel.hasMany(PenModel)
}



export default PenModel

