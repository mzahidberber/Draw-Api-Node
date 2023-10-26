import { inject, injectable } from 'inversify'
import EntityRepositoryAbstract from '../abstract/EntityRepositoryAbstract'
import { Model, ModelCtor } from 'sequelize-typescript'
import DataTypes from '../../dependencyresolvers/DataTypes'
import Draw from '../../../core/models/concrete/Draw'
import { IDrawRepository } from '../abstract/IDrawRepository'

@injectable()
class DrawRepository extends EntityRepositoryAbstract<Draw>  implements IDrawRepository {
    constructor(@inject(DataTypes.DrawModel) private model: ModelCtor<Model>,@inject(DataTypes.Draw) private type:new () => Draw ){
        super(model,type)
    }
}

export default DrawRepository