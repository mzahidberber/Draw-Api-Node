import { inject, injectable } from 'inversify'
import EntityRepositoryAbstract from '../abstract/EntityRepositoryAbstract'
import { Model, ModelCtor } from 'sequelize-typescript'
import DataTypes from '../../dependencyresolvers/DataTypes'
import ElementType from '../../../core/models/concrete/ElementType'
import { IElementTypeRepository } from '../abstract/IElementTypeRepository'

@injectable()
class ElementTypeRepository extends EntityRepositoryAbstract<ElementType>  implements IElementTypeRepository {
    constructor(
        @inject(DataTypes.ElementTypeModel) private model: ModelCtor<Model>,
        @inject(DataTypes.ElementType) private type:new () => ElementType ){
        super(model,type)
    }
}

export default ElementTypeRepository