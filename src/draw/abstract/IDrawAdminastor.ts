import { PointGeo } from "../../core/models/others/PointGeo";
import { CommandEnums } from "../concrete/CommandEnums";
import { ElementInfo } from "../models/ElementInfo";


export interface IDrawAdminastor{
    useTime:Date
    refreshTime():void
    startCommandAsync(command:CommandEnums,drawId?:number,layerId?:number,penId?:number):Promise<ElementInfo>
    addCoordinateAsync(point:PointGeo):Promise<ElementInfo>
    setRadiusAsync(radius:number):Promise<ElementInfo>
    stopCommandAsync():Promise<ElementInfo>
    setIsFinishAsync():Promise<ElementInfo>

    

}