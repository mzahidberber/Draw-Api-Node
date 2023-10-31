import { inject, injectable } from 'inversify'
import {IElementRepository} from '../abstract/IElementRepository'
import {Element} from '../../../core/models/concrete/Element'
import {EntityRepositoryAbstract} from '../abstract/EntityRepositoryAbstract'
import { Model, ModelCtor } from 'sequelize-typescript'
import {DataTypes} from '../../dependencyresolvers/DataTypes'
import PointModel from '../../sequelize/models/PointModel'
import { dataMapper } from '../../mapper/dataMapper'

@injectable()
export class ElementRepository extends EntityRepositoryAbstract<Element>  implements IElementRepository {
    constructor(
        @inject(DataTypes.ElementModel) private model: ModelCtor<Model>,
        @inject(DataTypes.Element) private type:new () => Element ){
        super(model,type)
    }
    async GetAllWithPointsAsync(): Promise<Element[]> {
        let entities=await this.model.findAll({include:PointModel})
        return await dataMapper.mapArrayAsync<Model,Element>(entities,this.model,Element)
    }
}
