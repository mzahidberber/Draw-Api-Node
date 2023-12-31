import { DataTypes,Model } from 'sequelize'
import { AutoMap } from '@automapper/classes';
import ElementModel from './ElementModel';
import {  SequelizeConnect } from '../SequelizeConnect';
class ElementTypeModel extends Model
{
    @AutoMap()
    id!:string
    @AutoMap()
    Name!: string;
    @AutoMap(()=>[ElementModel])
    Elements: ElementModel[]=[]
    @AutoMap()
    readonly createdAt!: Date
    @AutoMap()
    readonly updatedAt!: Date
    
}




export function initModel(){
    ElementTypeModel.init({
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
        }
    },{
        sequelize: SequelizeConnect.getInstance().sequelize,
        modelName: 'ElementType',
        tableName: 'ElementTypes'
    })
}

export function createReleationship(){
}

export default ElementTypeModel

