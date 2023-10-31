import {IEntity} from "../../core/models/abstract/IEntity";
import { CustomResponse } from "../../core/dtos/CustomResponse";


export interface IGenericService<T extends IEntity<any>>{
    GetAllAsync(userId:string):Promise<CustomResponse<T[]>>
    GetWhereAsync(userId:string,filter: Partial<T>): Promise<CustomResponse<T[]>>
    GetAsync(userId:string,entityId:number):Promise<CustomResponse<T>>
    AddAllAsync(entities:T[]):Promise<CustomResponse<T[]>>
    UpdateAllAsync(userId:string,entities:T[]):Promise<CustomResponse<any>>
    DeleteAllAsync(userId:string,entities:number[]):Promise<CustomResponse<any>>
}