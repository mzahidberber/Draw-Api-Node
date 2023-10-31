
import { IEntity } from "../../../core/models/abstract/IEntity"
import {IUnitOfWork} from "./IUnitOfWork"


export interface IEntityRepository<T extends IEntity<any>> extends IUnitOfWork{
    GetAllAsync():Promise<T[]>
    GetWhereAsync(filter:{}):Promise<T[]>
    GetByIdAsync(id:number):Promise<T | null>
    AddAsync(entity:T[]):Promise<boolean>
    UpdateAsync(entity:T[]):Promise<boolean>
    DeleteAsync(ids: number[]):Promise<boolean>
}
