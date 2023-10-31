
import { DrawDTO } from "../../core/dtos/concrete/DrawDTO";
import { IGenericService } from "./IGenericService";
import { CustomResponse } from "../../core/dtos/CustomResponse";

export interface IDrawService extends IGenericService<DrawDTO>{
    GetLayersAsync(userId:string,drawId:number):Promise<CustomResponse<DrawDTO[]>>
}