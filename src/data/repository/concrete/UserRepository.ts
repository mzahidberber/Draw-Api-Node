import { inject, injectable } from 'inversify'
import EntityRepositoryAbstract from '../abstract/EntityRepositoryAbstract'
import { Model, ModelCtor } from 'sequelize-typescript'
import DataTypes from '../../dependencyresolvers/DataTypes'
import User from '../../../core/models/concrete/User'
import { IUserRepository } from '../abstract/IUserRepository'

@injectable()
class UserRepository extends EntityRepositoryAbstract<User>  implements IUserRepository {
    constructor(@inject(DataTypes.UserModel) private model: ModelCtor<Model> ,
    @inject(DataTypes.User) private type:new () => User){
        super(model,type)
    }
}

export default UserRepository