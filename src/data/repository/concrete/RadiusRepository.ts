
import { Model, ModelCtor } from 'sequelize-typescript'
import {EntityRepositoryAbstract} from '../abstract/EntityRepositoryAbstract'
import { inject, injectable } from 'inversify'
import {DataTypes} from '../../dependencyresolvers/DataTypes'
import { IRadiusRepository } from '../abstract/IRadiusRepository'
import {Radius} from '../../../core/models/concrete/Radius'
import ElementModel from '../../sequelize/models/ElementModel'
import LayerModel from '../../sequelize/models/LayerModel'
import DrawModel from '../../sequelize/models/DrawModel'
import { Includeable } from 'sequelize'


@injectable()
export class RadiusRepository extends EntityRepositoryAbstract<Radius> implements IRadiusRepository {
    constructor(
        @inject(DataTypes.RadiusModel) private model: ModelCtor<Model>,
        @inject(DataTypes.Radius) private type:new () => Radius ){
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
    public override CheckEntitiesUserId(entities: Radius[]): Radius[] {
        return entities.filter(x=>x.Element!==null)
    }

    public override CheckEntityUserId(entity: Radius): Radius | null {
        return entity.Element ? entity : null
    }
    
    
}
