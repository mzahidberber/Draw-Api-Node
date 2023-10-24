import { inject, injectable } from 'inversify'
import EntityRepositoryAbstract from '../abstract/EntityRepositoryAbstract'
import { Model, ModelCtor } from 'sequelize-typescript'
import TYPES from '../../dependencyresolvers/data-types'
import Draw from '../../../core/models/concrete/Draw'
import { IDrawRepository } from '../abstract/IDrawRepository'

@injectable()
class DrawRepository extends EntityRepositoryAbstract<Draw>  implements IDrawRepository {
    constructor(@inject(TYPES.DrawModel) private model: ModelCtor<Model> ){
        super(model)
    }
}

export default DrawRepository