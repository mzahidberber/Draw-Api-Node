import { Element } from "../../../core/models/concrete/Element";
import { Radius } from "../../../core/models/concrete/Radius";
import { BaseCommandAbstract } from "../../abstract/BaseCommandAbstract";
import { ElementInfo } from "../../models/ElementInfo";
import { CommandEnums, PointTypeEnum } from "../Enums";


export class  CircleCenterRadius  extends BaseCommandAbstract{

    constructor(radius:number,drawId: string, layerId: string, penId: string){
        super(radius,drawId,layerId,penId)
    }

    async controlCommandAsync(): Promise<ElementInfo> {
        this.selectedElementTypeId=CommandEnums.circleCenterPoint
        return this.pointList.length == 1 ? await this.addCircleAsync() : await this.errorMessageAsync(1)
    }

    async addCircleAsync():Promise<ElementInfo>{
        const elemnt=await this.createElementAsync()
        this.finishCommand()
        return {element:elemnt,isTrue:true}
    }

    async createElementAsync():Promise<Element>{
        const p1=await this.createPointAsync(this.pointList[0].X,this.pointList[0].Y,PointTypeEnum.end)
        const radius=new Radius()
        radius.Value=this.radius
        return this.createElementManyPointAsync(this.selectedElementTypeId,[p1],[radius])
    }
    
}