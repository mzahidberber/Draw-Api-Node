
import { Model, ModelCtor } from 'sequelize-typescript'
import {EntityRepositoryAbstract} from '../abstract/EntityRepositoryAbstract'
import { inject, injectable } from 'inversify'
import {DataTypes} from '../../dependencyresolvers/DataTypes'
import { IRadiusRepository } from '../abstract/IRadiusRepository'
import {Radius} from '../../../core/models/concrete/Radius'


@injectable()
export class RadiusRepository extends EntityRepositoryAbstract<Radius> implements IRadiusRepository {
    constructor(
        @inject(DataTypes.RadiusModel) private model: ModelCtor<Model>,
        @inject(DataTypes.Radius) private type:new () => Radius ){
        super(model,type)

    }
    
    
}
