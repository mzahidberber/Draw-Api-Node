
import { IEntity } from "../../../core/models/abstract/IEntity"
import { DataInfo } from "../../models/DataInfo"
import {IUnitOfWork} from "./IUnitOfWork"


export interface IEntityRepository<T extends IEntity<any>> extends IUnitOfWork{
    GetAllAsync(userId:string):Promise<T[]>
    GetWhereAsync(userId:string,filter:{}):Promise<T[]>
    GetByIdAsync(userId:string,id:number):Promise<T | null>
    AddAsync(entity:T[]):Promise<DataInfo<T[] | null>>
    UpdateAsync(entity:T[]):Promise<DataInfo<T[] | null>>
    DeleteAsync(ids: number[]):Promise<boolean>
}
