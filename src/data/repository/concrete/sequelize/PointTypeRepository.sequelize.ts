
import { Model, ModelCtor } from 'sequelize-typescript'
import {EntityRepositoryAbstract} from '../../abstract/sequelize/EntityRepositoryAbstract'
import { inject, injectable } from 'inversify'
import {DataLayerTypes} from '../../../dependencyresolvers/DataTypes'
import { IPointTypeRepository } from '../../abstract/IPointTypeRepository'
import {PointType} from '../../../../core/models/concrete/PointType'


@injectable()
export class SPointTypeRepository extends EntityRepositoryAbstract<PointType> implements IPointTypeRepository {
    constructor(
        @inject(DataLayerTypes.SPointTypeModel) private model: ModelCtor<Model>,
        @inject(DataLayerTypes.PointType) private type:new () => PointType ){
        super(model,type)

    }
    
    
}
