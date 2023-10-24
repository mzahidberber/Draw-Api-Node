import { inject, injectable } from 'inversify'
import EntityRepositoryAbstract from '../abstract/EntityRepositoryAbstract'
import { Model, ModelCtor } from 'sequelize-typescript'
import TYPES from '../../dependencyresolvers/data-types'
import User from '../../../core/models/concrete/User'
import { IUserRepository } from '../abstract/IUserRepository'

@injectable()
class UserRepository extends EntityRepositoryAbstract<User>  implements IUserRepository {
    constructor(@inject(TYPES.UserModel) private model: ModelCtor<Model> ){
        super(model)
    }
}

export default UserRepository