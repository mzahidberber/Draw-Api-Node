
import { Model, ModelCtor } from 'sequelize-typescript'
import {EntityRepositoryAbstract} from '../abstract/EntityRepositoryAbstract'
import { inject, injectable } from 'inversify'
import {DataTypes} from '../../dependencyresolvers/DataTypes'
import { IPointTypeRepository } from '../abstract/IPointTypeRepository'
import {PointType} from '../../../core/models/concrete/PointType'


@injectable()
export class PointTypeRepository extends EntityRepositoryAbstract<PointType> implements IPointTypeRepository {
    constructor(
        @inject(DataTypes.PointTypeModel) private model: ModelCtor<Model>,
        @inject(DataTypes.PointType) private type:new () => PointType ){
        super(model,type)

    }
    
    
}
