
import { IEntity } from "../../../core/models/abstract/IEntity"
import { DataInfo } from "../../models/DataInfo"
import {IUnitOfWork} from "./IUnitOfWork"


export interface IEntityRepository<T extends IEntity<any>> extends IUnitOfWork{
    GetAllAsync(userId:string):Promise<T[]>
    GetWhereAsync(userId:string,filter: Record<any,any>):Promise<T[]>
    GetByIdAsync(userId:string,id:string):Promise<T | null>
    GetByIdsAsync(userId:string,ids:string[]):Promise<T[]>
    AddAsync(entity:T[]):Promise<DataInfo<T[] | null>>
    UpdateAsync(entity:T[]):Promise<DataInfo<T[] | null>>
    DeleteAsync(ids: string[]):Promise<boolean>
}
