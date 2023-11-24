
import { Model, ModelCtor } from 'sequelize-typescript'
import {EntityRepositoryAbstract} from '../../abstract/sequelize/EntityRepositoryAbstract'
import { inject, injectable } from 'inversify'
import {DataLayerTypes} from '../../../dependencyresolvers/DataTypes'
import { ISSAngleRepository } from '../../abstract/ISSAngleRepository'
import {SSAngle} from '../../../../core/models/concrete/SSAngle'
import { Includeable } from 'sequelize'
import ElementModel from '../../../sequelize/models/ElementModel'
import LayerModel from '../../../sequelize/models/LayerModel'
import DrawModel from '../../../sequelize/models/DrawModel'


@injectable()
export class SSSAngleRepository extends EntityRepositoryAbstract<SSAngle> implements ISSAngleRepository {
    constructor(
        @inject(DataLayerTypes.SSSAngleModel) private model: ModelCtor<Model>,
        @inject(DataLayerTypes.SSAngle) private type:new () => SSAngle ){
        super(model,type)

    }


    public override GetIncludeForUserId(userId:string): Includeable[] {
        return [{
            model:ElementModel,
            attributes:["Id"],
            include:[{
                model:LayerModel,
                attributes:["Id"], 
                include:[{
                    model:DrawModel,
                    attributes:["Id"],
                    where:{
                        UserId:userId
                    },
                }]
            }]
            
        }]
    }
    public override CheckEntitiesUserId(entities: SSAngle[]): SSAngle[] {
        return entities.filter(x=>x.Element!==null)
    }

    public override CheckEntityUserId(entity: SSAngle): SSAngle | null {
        return entity.Element ? entity : null
    }
    
    
}
