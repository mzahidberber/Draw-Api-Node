
import { Model, ModelCtor } from 'sequelize-typescript'
import Point from '../../../core/models/concrete/Point'
import EntityRepositoryAbstract from '../abstract/EntityRepositoryAbstract'
import { inject, injectable } from 'inversify'
import { IPointRepository } from '../abstract/IPointRepository'
import DataTypes from '../../dependencyresolvers/DataTypes'


@injectable()
class PointRepository extends EntityRepositoryAbstract<Point> implements IPointRepository {
    constructor(
        @inject(DataTypes.PointModel) private model: ModelCtor<Model>,
        @inject(DataTypes.Point) private type:new () => Point ){
        super(model,type)

    }
    
    
}

export default PointRepository