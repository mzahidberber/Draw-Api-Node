import { PointGeo } from "../../core/models/others/PointGeo";
import { CommandEnums } from "../concrete/Enums";
import { ElementInfo } from "../models/ElementInfo";


export interface IDrawAdminastor{
    useTime:Date
    refreshTime():void
    startCommandAsync(command:CommandEnums,drawId?:string,layerId?:string,penId?:string):Promise<ElementInfo>
    addCoordinateAsync(point:PointGeo):Promise<ElementInfo>
    setRadiusAsync(radius:number):Promise<ElementInfo>
    stopCommandAsync():Promise<ElementInfo>
    setIsFinishAsync():Promise<ElementInfo>

    

}