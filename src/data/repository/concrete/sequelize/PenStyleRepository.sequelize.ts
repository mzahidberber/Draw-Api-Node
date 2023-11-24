import { inject, injectable } from 'inversify'
import {EntityRepositoryAbstract} from '../../abstract/sequelize/EntityRepositoryAbstract'
import { Model, ModelCtor } from 'sequelize-typescript'
import {DataLayerTypes} from '../../../dependencyresolvers/DataTypes'
import { IPenStyleRepository } from '../../abstract/IPenStyleRepository'
import {PenStyle} from '../../../../core/models/concrete/PenStyle'

@injectable()
export class SPenStyleRepository extends EntityRepositoryAbstract<PenStyle>  implements IPenStyleRepository {
    constructor(
        @inject(DataLayerTypes.SPenStyleModel) private model: ModelCtor<Model>,
        @inject(DataLayerTypes.PenStyle) private type:new () => PenStyle){
        super(model,type)

    }
}