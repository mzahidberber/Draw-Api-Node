import { Element } from "../../../core/models/concrete/Element";
import { BaseCommandAbstract } from "../../abstract/BaseCommandAbstract";
import { ElementInfo } from "../../models/ElementInfo";
import { CommandEnums, PointTypeEnum } from "../Enums";
import { DrawMath } from "../Helpers/DrawMath";


export class  Rectangle  extends BaseCommandAbstract{

    constructor(radius:number,drawId: string, layerId: string, penId: string){
        super(radius,drawId,layerId,penId)
    }

    async controlCommandAsync(): Promise<ElementInfo> {
        this.selectedElementTypeId=CommandEnums.rectangle
        return this.pointList.length == 2 ? await this.addRectangle() : await this.errorMessageAsync(2)
    }

    async addRectangle():Promise<ElementInfo>{
        const elemnt=await this.createElementAsync()
        this.finishCommand()
        return {element:elemnt,isTrue:true}
    }

    async createElementAsync():Promise<Element>{
        const p1=await this.createPointAsync(this.pointList[0].X,this.pointList[0].Y,PointTypeEnum.end)
        const p2=await this.createPointAsync(this.pointList[1].X,this.pointList[1].Y,PointTypeEnum.end)
        const p3Data=DrawMath.additionPointPlusX(this.pointList[0],DrawMath.findDifferancePointX(this.pointList[0],this.pointList[1]))
        const p3=await this.createPointAsync(p3Data.X,p3Data.Y,PointTypeEnum.end)
        const p4Data=DrawMath.additionPointPlusY(this.pointList[0],DrawMath.findDifferancePointY(this.pointList[0],this.pointList[1]))
        const p4=await this.createPointAsync(p4Data.X,p4Data.Y,PointTypeEnum.end)
        return this.createElementManyPointAsync(this.selectedElementTypeId,[p1,p3,p2,p4])
    }
    
}