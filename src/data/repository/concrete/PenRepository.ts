import { inject, injectable } from 'inversify'
import {EntityRepositoryAbstract} from '../abstract/EntityRepositoryAbstract'
import { Model, ModelCtor } from 'sequelize-typescript'
import {DataTypes} from '../../dependencyresolvers/DataTypes'
import { IPenRepository } from '../abstract/IPenRepository'
import {Pen} from '../../../core/models/concrete/Pen'

@injectable()
export class PenRepository extends EntityRepositoryAbstract<Pen>  implements IPenRepository {
    constructor(
        @inject(DataTypes.PenModel) private model: ModelCtor<Model>,
        @inject(DataTypes.Pen) private type:new () => Pen){
        super(model,type)

    }
}
