import { DataTypes,Model } from 'sequelize'
import { AutoMap } from '@automapper/classes';
import PenModel from './PenModel';
import { SequelizeConnect } from '../SequelizeConnect';

class PenStyleModel extends Model 
{
    
    @AutoMap()
    id!:string
    @AutoMap()
    Name!: string;
    @AutoMap(()=>[PenModel])
    Pens: PenModel[];
    @AutoMap()
    readonly createdAt!: Date;
    @AutoMap()
    readonly updatedAt!: Date;

    constructor() {
        super();
        this.Pens=[]
    }
}

export function initModel(){
    PenStyleModel.init({
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
        modelName: 'PenStyle',
        tableName: 'PenStyles'
    })
}

export function createReleationship(){
}



export default PenStyleModel

