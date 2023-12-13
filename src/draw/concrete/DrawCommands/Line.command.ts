import { Element } from "../../../core/models/concrete/Element";
import { BaseCommandAbstract } from "../../abstract/BaseCommandAbstract";
import { ElementInfo } from "../../models/ElementInfo";
import { CommandEnums, PointTypeEnum } from "../Enums";


export class  Line  extends BaseCommandAbstract{

    constructor(radius:number,drawId: string, layerId: string, penId: string){
        super(radius,drawId,layerId,penId)
    }

    async controlCommandAsync(): Promise<ElementInfo> {
        this.selectedElementTypeId=CommandEnums.line
        return this.pointList.length == 2 ? await this.addLineAsync() : await this.errorMessageAsync(2)
    }

    async addLineAsync():Promise<ElementInfo>{
        const elemnt=await this.createElementAsync()
        this.finishCommand()
        return {element:elemnt,isTrue:true}
    }

    async createElementAsync():Promise<Element>{
        const p1=await this.createPointAsync(this.pointList[0].X,this.pointList[0].Y,PointTypeEnum.end)
        const p2=await this.createPointAsync(this.pointList[1].X,this.pointList[1].Y,PointTypeEnum.end)
        return this.createElementManyPointAsync(this.selectedElementTypeId,[p1,p2])
    }
    
}