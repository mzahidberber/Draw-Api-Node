import { Element } from "../../../core/models/concrete/Element";
import { Radius } from "../../../core/models/concrete/Radius";
import { BaseCommandAbstract } from "../../abstract/BaseCommandAbstract";
import { ElementInfo } from "../../models/ElementInfo";
import { DrawMath } from "../Helpers/DrawMath";


export class  Ellipse  extends BaseCommandAbstract{

    constructor(radius:number,drawId: number, layerId: number, penId: number){
        super(radius,drawId,layerId,penId)
    }

    async controlCommandAsync(): Promise<ElementInfo> {
        this.selectedElementTypeId=5
        return this.pointList.length == 3 ? await this.addLineAsync() : await this.errorMessageAsync(3)
    }

    async addLineAsync():Promise<ElementInfo>{
        const elemnt=await this.createElementAsync()
        this.finishCommand()
        return {element:elemnt,isTrue:true}
    }

    async getRadiusesAsync():Promise<Radius[]>{
        const r1=new Radius()
        r1.Value=DrawMath.findDifferanceTwoPoint(this.pointList[0],this.pointList[1])
        const r2=new Radius()
        r2.Value=DrawMath.findDifferancePointY(this.pointList[0],this.pointList[2])
        return [r1,r2]
    }

    async createElementAsync():Promise<Element>{
        const p1=await this.createPointAsync(this.pointList[0].X,this.pointList[0].Y,1)
        const radiuses=await this.getRadiusesAsync()
        return this.createElementManyPointAsync(this.selectedElementTypeId,[p1],radiuses)
    }
    
}