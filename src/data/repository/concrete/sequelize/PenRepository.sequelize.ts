import { inject, injectable } from 'inversify'
import {EntityRepositoryAbstract} from '../../abstract/sequelize/EntityRepositoryAbstract'
import { Model, ModelCtor } from 'sequelize-typescript'
import {DataLayerTypes} from '../../../dependencyresolvers/DataTypes'
import { IPenRepository } from '../../abstract/IPenRepository'
import {Pen} from '../../../../core/models/concrete/Pen'

@injectable()
export class SPenRepository extends EntityRepositoryAbstract<Pen>  implements IPenRepository {
    constructor(
        @inject(DataLayerTypes.SPenModel) private model: ModelCtor<Model>,
        @inject(DataLayerTypes.Pen) private type:new () => Pen){
        super(model,type)

    }

}
