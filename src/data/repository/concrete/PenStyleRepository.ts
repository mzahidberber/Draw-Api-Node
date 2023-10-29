import { inject, injectable } from 'inversify'
import EntityRepositoryAbstract from '../abstract/EntityRepositoryAbstract'
import { Model, ModelCtor } from 'sequelize-typescript'
import DataTypes from '../../dependencyresolvers/DataTypes'
import { IPenStyleRepository } from '../abstract/IPenStyleRepository'
import PenStyle from '../../../core/models/concrete/PenStyle'

@injectable()
class PenStyleRepository extends EntityRepositoryAbstract<PenStyle>  implements IPenStyleRepository {
    constructor(
        @inject(DataTypes.PenStyleModel) private model: ModelCtor<Model>,
        @inject(DataTypes.PenStyle) private type:new () => PenStyle){
        super(model,type)

    }
}

export default PenStyleRepository