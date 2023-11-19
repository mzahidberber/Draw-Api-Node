import { Element } from "../../../core/models/concrete/Element";
import { Radius } from "../../../core/models/concrete/Radius";
import { GeoService } from "../../../core/services/GeoService/GeoService";
import { RadiusAndCPoint } from "../../../core/services/GeoService/model/RadiusAndCPoint";
import { BaseCommandAbstract } from "../../abstract/BaseCommandAbstract";
import { ElementInfo } from "../../models/ElementInfo";


export class  CircleTreePoint  extends BaseCommandAbstract{

    constructor(radius:number,drawId: number, layerId: number, penId: number){
        super(radius,drawId,layerId,penId)
    }

    async controlCommandAsync(): Promise<ElementInfo> {
        this.selectedElementTypeId=2
        return this.pointList.length == 3 ? await this.addCircleAsync() : await this.errorMessageAsync(3)
    }

    async addCircleAsync():Promise<ElementInfo>{
        const centerPandRadius=await GeoService.findCenterAndRadiusAsync(this.pointList[0],this.pointList[1],this.pointList[2])
        if(centerPandRadius){
            const elemnt=await this.createElementAsync(centerPandRadius)
            this.finishCommand()
            return {element:elemnt,isTrue:true}
        }
        else this.finishCommand()
        return {isTrue:false,message:"GeoService cant use or values cant calculate"}
        
    }

    async createElementAsync(centerPandRadius: RadiusAndCPoint):Promise<Element>{
        const centerPoint=await this.createPointAsync(centerPandRadius.centerPoint.X,centerPandRadius.centerPoint.Y,1)
        const radius = new Radius()
        radius.Value=centerPandRadius.radius
        return this.createElementManyPointAsync(this.selectedElementTypeId,[centerPoint],[radius])
        
    }
    
}