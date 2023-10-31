
import { Model, ModelCtor } from 'sequelize-typescript'
import {EntityRepositoryAbstract} from '../abstract/EntityRepositoryAbstract'
import { inject, injectable } from 'inversify'
import {DataTypes} from '../../dependencyresolvers/DataTypes'
import { ISSAngleRepository } from '../abstract/ISSAngleRepository'
import {SSAngle} from '../../../core/models/concrete/SSAngle'


@injectable()
export class SSAngleRepository extends EntityRepositoryAbstract<SSAngle> implements ISSAngleRepository {
    constructor(
        @inject(DataTypes.SSAngleModel) private model: ModelCtor<Model>,
        @inject(DataTypes.SSAngle) private type:new () => SSAngle ){
        super(model,type)

    }
    
    
}
