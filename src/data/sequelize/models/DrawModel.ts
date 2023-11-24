import { DataTypes,Model } from 'sequelize'
import { AutoMap } from '@automapper/classes';
import LayerModel from './LayerModel';
import UserModel from './UserModel';
import { SequelizeConnect } from '../SequelizeConnect';

class DrawModel extends Model
{
    @AutoMap()
    Id!:number
    @AutoMap()
    Name!: string;
    @AutoMap()
    UserId!: string;
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
    DrawModel.belongsTo(UserModel,{
      foreignKey:{
          allowNull:false
      }
    })
    UserModel.hasMany(DrawModel)
}



export default DrawModel

