import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import {User} from '../../../core/models/concrete/User';
import { AutoMap } from '@automapper/classes';
import DrawModel from './DrawModel';

class UserModel extends Model implements User
{
    @AutoMap()
    Id!:string
    @AutoMap()
    FirstName!: string;
    @AutoMap()
    LastName!: string;
    @AutoMap()
    Email!: string;
    @AutoMap()
    EmailConfirmed!: boolean;
    @AutoMap()
    PasswordHash!: string;
    @AutoMap(()=>[DrawModel])
    DrawElements: DrawModel[]=[]
    @AutoMap()
    readonly createdAt!: Date
    @AutoMap()
    readonly updatedAt!: Date
}

UserModel.init({
    Id:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true,
        unique:true,
    },
    FirstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    LastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    EmailConfirmed:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    PasswordHash:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    sequelize: sequelize,
    modelName: 'User',
    tableName: 'Users'
})



export default UserModel

