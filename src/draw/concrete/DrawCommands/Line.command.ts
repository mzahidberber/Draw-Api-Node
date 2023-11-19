import { Element } from "../../../core/models/concrete/Element";
import { BaseCommandAbstract } from "../../abstract/BaseCommandAbstract";
import { ElementInfo } from "../../models/ElementInfo";


export class  Line  extends BaseCommandAbstract{

    constructor(radius:number,drawId: number, layerId: number, penId: number){
        super(radius,drawId,layerId,penId)
    }

    async controlCommandAsync(): Promise<ElementInfo> {
        this.selectedElementTypeId=1
        return this.pointList.length == 2 ? await this.addLineAsync() : await this.errorMessageAsync(2)
    }

    async addLineAsync():Promise<ElementInfo>{
        const elemnt=await this.createElementAsync()
        this.finishCommand()
        return {element:elemnt,isTrue:true}
    }

    async createElementAsync():Promise<Element>{
        const p1=await this.createPointAsync(this.pointList[0].X,this.pointList[0].Y,1)
        const p2=await this.createPointAsync(this.pointList[1].X,this.pointList[1].Y,1)
        return this.createElementManyPointAsync(this.selectedElementTypeId,[p1,p2])
    }
    
}