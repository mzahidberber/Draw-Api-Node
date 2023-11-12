import { CustomResponse } from "../../core/dtos/CustomResponse";
import { IDTO } from "../../core/dtos/abstract/IDTO";


export interface IGenericService<T extends IDTO<any>>{
    GetAllAsync(userId:string):Promise<CustomResponse<T[]>>
    GetWhereAsync(userId:string,filter: Partial<T>): Promise<CustomResponse<T[]>>
    GetAsync(userId:string,entityId:number):Promise<CustomResponse<T>>
    AddAllAsync(userId:string,entities:T[]):Promise<CustomResponse<T[]>>
    UpdateAllAsync(userId:string,entities:T[]):Promise<CustomResponse<any>>
    DeleteAllAsync(userId:string,ids:number[]):Promise<CustomResponse<any>>
}