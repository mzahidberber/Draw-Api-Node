import { CustomResponse } from "../../core/dtos/CustomResponse";
import { ElementDTO } from "../../core/dtos/concrete/ElementDTO";
import { PointGeo } from "../../core/models/others/PointGeo";
import { CommandEnums } from "../../draw/concrete/CommandEnums";


export interface IDrawLayerService{
    addCoordinateAsync(userId:string,point:PointGeo):Promise<CustomResponse<ElementDTO>>
    startCommandAsync(userId:string,command:CommandEnums,drawId?:number,layerId?:number,penId?:number):Promise<CustomResponse<boolean>>
    stopCommandAsync(userId:string):Promise<CustomResponse<boolean>>
    setRadiusAsync(userId:string,radius:number):Promise<CustomResponse<boolean>>
    setIsFinish(userId:string):Promise<CustomResponse<ElementDTO>>

}