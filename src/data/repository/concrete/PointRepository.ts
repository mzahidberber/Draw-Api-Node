
import { Model, ModelCtor } from 'sequelize-typescript'
import Point from '../../../core/models/concrete/Point'
import EntityRepositoryAbstract from '../abstract/EntityRepositoryAbstract'
import { inject, injectable } from 'inversify'
import { IPointRepository } from '../abstract/IPointRepository'
import TYPES from '../../dependencyresolvers/data-types'

@injectable()
class PointRepository extends EntityRepositoryAbstract<Point> implements IPointRepository {
    constructor(@inject(TYPES.PointModel) private model: ModelCtor<Model> ){
        super(model)

    }
    
    
}

export default PointRepository