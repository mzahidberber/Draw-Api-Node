import IEntityRepository from "./IEntityRepository";
import Element from '../../../core/models/concrete/Element'

export interface IElementRepository extends IEntityRepository<Element>{
    GetAllWithPointsAsync():Promise<Element[]>
}
