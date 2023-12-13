import { DataTypes,Model } from 'sequelize'
import { AutoMap } from '@automapper/classes';
import PointModel from './PointModel';
import { SequelizeConnect } from '../SequelizeConnect';

class PointTypeModel extends Model 
{
    
    @AutoMap()
    id!:string
    @AutoMap()
    Name!: string;
    @AutoMap(()=>[PointModel])
    Points: PointModel[];
    @AutoMap()
    readonly createdAt!: Date;
    @AutoMap()
    readonly updatedAt!: Date;

    constructor() {
        super();
        this.Points=[]
    }
    
}

export function initModel(){
    PointTypeModel.init({
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
    },{
        sequelize: SequelizeConnect.getInstance().sequelize,
        modelName: 'PointType',
        tableName: 'PointTypes'
    })
}

export function createReleationship(){
}



export default PointTypeModel

