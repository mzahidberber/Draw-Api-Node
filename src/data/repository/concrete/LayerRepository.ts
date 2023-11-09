import { inject, injectable } from 'inversify'
import {EntityRepositoryAbstract} from '../abstract/EntityRepositoryAbstract'
import { Model, ModelCtor } from 'sequelize-typescript'
import {Layer} from '../../../core/models/concrete/Layer'
import { ILayerRepository } from '../abstract/ILayerRepository'
import {DataTypes} from '../../dependencyresolvers/DataTypes'
import ElementModel from '../../sequelize/models/ElementModel'
import { dataMapper } from '../../mapper/dataMapper'
import DrawModel from '../../sequelize/models/DrawModel'
import { Includeable } from 'sequelize'

@injectable()
export class LayerRepository extends EntityRepositoryAbstract<Layer>  implements ILayerRepository {
    constructor(
        @inject(DataTypes.LayerModel) private model: ModelCtor<Model>,
        @inject(DataTypes.Layer) private type:new () => Layer){
        super(model,type)

    }
    async GetAllWithElementsAsync(): Promise<Layer[]> {
        let entities=await this.model.findAll({include:ElementModel})
        return await dataMapper.mapArrayAsync<Model,Layer>(entities,this.model,Layer)
    }

    public override GetIncludeForUserId(userId:string): Includeable[] {
        return [{
            model:DrawModel,
            attributes:["Id"],
            where:{
                UserId:userId
            },
        }]
    }
    public override CheckEntitiesUserId(entities: Layer[]): Layer[] {
        return entities.filter(x=>x.Draw!==null)
    }

    public override CheckEntityUserId(entity: Layer): Layer | null {
        return entity.Draw ? entity : null
    }
}