import { DataTypes,Model } from 'sequelize'
import { AutoMap } from '@automapper/classes';
import LayerModel from './LayerModel';
import { SequelizeConnect } from '../SequelizeConnect';

class DrawModel extends Model
{
    @AutoMap()
    id!:string
    @AutoMap()
    Name!: string
    @AutoMap()
    UserId!: string
    @AutoMap(()=>[LayerModel])
    Layers: LayerModel[]=[]
    @AutoMap()
    NumberOfLayerElements!:number
    @AutoMap()
    readonly createdAt!: Date
    @AutoMap()
    readonly updatedAt!: Date
    
}

export function initModel(){
    DrawModel.init({
        id:{
            type:DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true,
            unique:true
        },
        UserId:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        NumberOfLayerElements:{
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue:0
        },
    },{
        sequelize: SequelizeConnect.getInstance().sequelize,
        modelName: 'Draw',
        tableName: 'Draws'
    })
}

export function createReleationship(){
}



export default DrawModel

