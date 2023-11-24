import { inject, injectable } from 'inversify'
import {EntityRepositoryAbstract} from '../../abstract/sequelize/EntityRepositoryAbstract'
import { Model, ModelCtor } from 'sequelize-typescript'
import {DataLayerTypes} from '../../../dependencyresolvers/DataTypes'
import {ElementType} from '../../../../core/models/concrete/ElementType'
import { IElementTypeRepository } from '../../abstract/IElementTypeRepository'
import { Includeable } from 'sequelize'

@injectable()
export class SElementTypeRepository extends EntityRepositoryAbstract<ElementType>  implements IElementTypeRepository {
    constructor(
        @inject(DataLayerTypes.SElementTypeModel) private model: ModelCtor<Model>,
        @inject(DataLayerTypes.ElementType) private type:new () => ElementType ){
        super(model,type)
    }
}
