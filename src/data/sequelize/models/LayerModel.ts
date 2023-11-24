import { DataTypes,Model } from 'sequelize'
import { SequelizeConnect } from '../SequelizeConnect'
import { AutoMap } from '@automapper/classes';
import ElementModel from './ElementModel';
import DrawModel from './DrawModel';
import PenModel from './PenModel';
class LayerModel extends Model
{
    @AutoMap()
    Id!:number
    @AutoMap()
    Name!: string;
    @AutoMap()
    Lock!: boolean;
    @AutoMap()
    Visibility!: boolean;
    @AutoMap()
    Thickness!: number;
    @AutoMap()
    NumberOfElements!: number;
    @AutoMap()
    DrawId!: number;
    @AutoMap()
    PenId!: number;
    @AutoMap(()=>[ElementModel])
    Elements: ElementModel[]=[]
    @AutoMap()
    readonly createdAt!: Date
    @AutoMap()
    readonly updatedAt!: Date

    
}

export function initModel(){
    LayerModel.init({
        Id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true,
            unique:true
        },
        Name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        Lock:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        },
        Visibility:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        },
        Thickness:{
            type:DataTypes.DOUBLE,
            allowNull:false,
        },
        NumberOfElements:{
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue:0
        }
    },{
        sequelize: SequelizeConnect.getInstance().sequelize,
        modelName: 'Layer',
        tableName: 'Layers'
    })
}

export function createReleationship(){
    LayerModel.belongsTo(DrawModel,{
        foreignKey:{
            allowNull:false
        }
    })
    DrawModel.hasMany(LayerModel)
    
    LayerModel.belongsTo(PenModel,{
        foreignKey:{
            allowNull:false
        }
    })
    PenModel.hasMany(LayerModel)
}



export default LayerModel

