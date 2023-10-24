import { DataTypes,Model } from 'sequelize'
import { sequelize } from '../database'
import User from '../../../core/models/concrete/User';

class UserModel extends Model implements User
{
    id!:number
    firstName!: string;
    lastName!: string;
    email!: string;
    password!: string;
    readonly createdAt!: Date
    readonly updatedAt!: Date
}

UserModel.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    firstName:DataTypes.STRING,
    lastName:DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
},{
    sequelize: sequelize,
    modelName: 'User',
    tableName: 'users'
})

export default UserModel

