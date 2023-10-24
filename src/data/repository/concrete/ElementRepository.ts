import { inject, injectable } from 'inversify'
import {IElementRepository} from '../abstract/IElementRepository'
import Element from '../../../core/models/concrete/Element'
import EntityRepositoryAbstract from '../abstract/EntityRepositoryAbstract'
import { Model, ModelCtor } from 'sequelize-typescript'
import TYPES from '../../dependencyresolvers/data-types'

@injectable()
class ElementRepository extends EntityRepositoryAbstract<Element>  implements IElementRepository {
    constructor(@inject(TYPES.ElementModel) private model: ModelCtor<Model> ){
        super(model)
    }
}

export default ElementRepository