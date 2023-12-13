import { inject, injectable } from 'inversify'
import { Model, ModelCtor } from 'sequelize-typescript'
import { IDrawRepository } from '../../abstract/IDrawRepository'
import { EntityRepositoryAbstract } from '../../abstract/sequelize/EntityRepositoryAbstract'
import { Draw } from '../../../../core/models/concrete/Draw'
import { DataLayerTypes } from '../../../dependencyresolvers/DataTypes'
import { dataMapper } from '../../../mapper/dataMapper'

@injectable()
export class SDrawRepository extends EntityRepositoryAbstract<Draw>  implements IDrawRepository {
    
    constructor(@inject(DataLayerTypes.SDrawModel) private model: ModelCtor<Model>,@inject(DataLayerTypes.Draw) private type:new () => Draw ){
        super(model,type)
    }
    

    override async GetWhereAsync(userId:string,filter: Partial<Draw>): Promise<Draw[]> {
        await this.CreateTransaction()
        filter.UserId=userId
        const entites=await this.model.findAll({where:filter})
        const entitiesMap=await dataMapper.mapArrayAsync<Model,Draw>(entites,this.model,this.type)
        return this.CheckEntitiesUserId(entitiesMap)
    }
}
