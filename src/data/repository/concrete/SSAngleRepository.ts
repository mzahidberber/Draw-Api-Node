
import { Model, ModelCtor } from 'sequelize-typescript'
import {EntityRepositoryAbstract} from '../abstract/EntityRepositoryAbstract'
import { inject, injectable } from 'inversify'
import {DataTypes} from '../../dependencyresolvers/DataTypes'
import { ISSAngleRepository } from '../abstract/ISSAngleRepository'
import {SSAngle} from '../../../core/models/concrete/SSAngle'
import { Includeable } from 'sequelize'
import ElementModel from '../../sequelize/models/ElementModel'
import LayerModel from '../../sequelize/models/LayerModel'
import DrawModel from '../../sequelize/models/DrawModel'


@injectable()
export class SSAngleRepository extends EntityRepositoryAbstract<SSAngle> implements ISSAngleRepository {
    constructor(
        @inject(DataTypes.SSAngleModel) private model: ModelCtor<Model>,
        @inject(DataTypes.SSAngle) private type:new () => SSAngle ){
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
