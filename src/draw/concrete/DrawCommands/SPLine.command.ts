import { Element } from "../../../core/models/concrete/Element";
import { Point } from "../../../core/models/concrete/Point";
import { Radius } from "../../../core/models/concrete/Radius";
import { BaseCommandAbstract } from "../../abstract/BaseCommandAbstract";
import { ElementInfo } from "../../models/ElementInfo";
import { CommandEnums, PointTypeEnum } from "../Enums";
import { DrawMath } from "../Helpers/DrawMath";


export class  SPLine  extends BaseCommandAbstract{

    constructor(radius:number,drawId: string, layerId: string, penId: string){
        super(radius,drawId,layerId,penId)
    }

    async controlCommandAsync(): Promise<ElementInfo> {
        this.selectedElementTypeId=CommandEnums.spline
        return this.pointList.length >= 1 && this.isFinish ? await this.addSpline() : await this.errorMessageAsync(undefined,"Should Add Point Or Run SetIsFinish")
    }

    async addSpline():Promise<ElementInfo>{
        const elemnt=await this.createElementAsync()
        this.finishCommand()
        return {element:elemnt,isTrue:true}
    }

    async createElementAsync():Promise<Element>{
        let pointList:Point[]=[]
        for(const p of this.pointList){
            pointList.push(await this.createPointAsync(p.X,p.Y,PointTypeEnum.end))
        }
        return this.createElementManyPointAsync(this.selectedElementTypeId,pointList)
    }
    
}