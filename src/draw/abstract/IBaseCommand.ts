import { Element } from "../../core/models/concrete/Element"
import { PointGeo } from "../../core/models/others/PointGeo"
import { ElementInfo } from "../models/ElementInfo"


export interface IBaseCommand{
    selectedElementTypeId:string
    selectedDrawId:string
    selectedLayerId:string
    selectedPenId:string
    isCompleted:boolean
    pointList:PointGeo[]
    editList:Element[]
    radius:number
    isFinish:boolean
    controlCommandAsync():Promise<ElementInfo>
    addPointAsync(point:PointGeo):Promise<ElementInfo>
    finishCommand():void
}