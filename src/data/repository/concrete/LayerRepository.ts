import { inject, injectable } from 'inversify'
import EntityRepositoryAbstract from '../abstract/EntityRepositoryAbstract'
import { Model, ModelCtor } from 'sequelize-typescript'
import Layer from '../../../core/models/concrete/Layer'
import { ILayerRepository } from '../abstract/ILayerRepository'
import TYPES from '../../dependencyresolvers/data-types'
import ElementModel from '../../sequelize/models/ElementModel'

@injectable()
class LayerRepository extends EntityRepositoryAbstract<Layer>  implements ILayerRepository {
    constructor(@inject(TYPES.LayerModel) private model: ModelCtor<Model> ){
        super(model)
    }
    async GetAllWithElementsAsync(): Promise<Layer[]> {
        let entities=await this.model.findAll({include:ElementModel})
        let newEntities:Layer[]=[]
        entities.forEach(entity => {
            newEntities.push(this.trasformModelToModel(entity.dataValues))
        })
        return newEntities
    }
}

export default LayerRepository