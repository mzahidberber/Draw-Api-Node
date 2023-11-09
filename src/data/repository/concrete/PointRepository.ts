
import { Model, ModelCtor } from 'sequelize-typescript'
import {Point} from '../../../core/models/concrete/Point'
import {EntityRepositoryAbstract} from '../abstract/EntityRepositoryAbstract'
import { inject, injectable } from 'inversify'
import { IPointRepository } from '../abstract/IPointRepository'
import {DataTypes} from '../../dependencyresolvers/DataTypes'
import ElementModel from '../../sequelize/models/ElementModel'
import { Includeable } from 'sequelize'
import LayerModel from '../../sequelize/models/LayerModel'
import DrawModel from '../../sequelize/models/DrawModel'


@injectable()
export class PointRepository extends EntityRepositoryAbstract<Point> implements IPointRepository {
    constructor(
        @inject(DataTypes.PointModel) private model: ModelCtor<Model>,
        @inject(DataTypes.Point) private type:new () => Point ){
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
    public override CheckEntitiesUserId(entities: Point[]): Point[] {
        return entities.filter(x=>x.Element!==null)
    }

    public override CheckEntityUserId(entity: Point): Point | null {
        return entity.Element ? entity : null
    }
    
    
}