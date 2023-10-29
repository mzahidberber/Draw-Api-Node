import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import { AutoMap } from '@automapper/classes';
import PenStyle from '../../../core/models/concrete/PenStyle';
import Pen from '../../../core/models/concrete/Pen';
import PenModel from './PenModel';

class PenStyleModel extends Model implements PenStyle
{
    
    @AutoMap()
    Id!:number
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

PenStyleModel.init({
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
    }
},{
    sequelize: sequelize,
    modelName: 'PenStyle',
    tableName: 'PenStyles'
})

export default PenStyleModel

