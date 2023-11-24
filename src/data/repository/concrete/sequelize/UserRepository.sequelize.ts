import { inject, injectable } from 'inversify'
import {EntityRepositoryAbstract} from '../../abstract/sequelize/EntityRepositoryAbstract'
import { Model, ModelCtor } from 'sequelize-typescript'
import {DataLayerTypes} from '../../../dependencyresolvers/DataTypes'
import {User} from '../../../../core/models/concrete/User'
import { IUserRepository } from '../../abstract/IUserRepository'

@injectable()
export class SUserRepository extends EntityRepositoryAbstract<User>  implements IUserRepository {
    constructor(@inject(DataLayerTypes.SUserModel) private model: ModelCtor<Model> ,
    @inject(DataLayerTypes.User) private type:new () => User){
        super(model,type)
    }
}
