import { inject, injectable } from 'inversify'
import { Model, ModelCtor } from 'sequelize-typescript'
import { IDrawRepository } from '../abstract/IDrawRepository'
import { EntityRepositoryAbstract } from '../abstract/EntityRepositoryAbstract'
import { Draw } from '../../../core/models/concrete/Draw'
import { DataTypes } from '../../dependencyresolvers/DataTypes'
import { Includeable } from 'sequelize'

@injectable()
export class DrawRepository extends EntityRepositoryAbstract<Draw>  implements IDrawRepository {
    
    constructor(@inject(DataTypes.DrawModel) private model: ModelCtor<Model>,@inject(DataTypes.Draw) private type:new () => Draw ){
        super(model,type)
    }

}
