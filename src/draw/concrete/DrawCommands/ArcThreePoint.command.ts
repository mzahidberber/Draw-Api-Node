import { Element } from "../../../core/models/concrete/Element";
import { Point } from "../../../core/models/concrete/Point";
import { Radius } from "../../../core/models/concrete/Radius";
import { SSAngle } from "../../../core/models/concrete/SSAngle";
import { PointGeo } from "../../../core/models/others/PointGeo";
import { GeoService } from "../../../core/services/GeoService/GeoService";
import { StartAndStop } from "../../../core/services/GeoService/model/StartAndStop";
import { BaseCommandAbstract } from "../../abstract/BaseCommandAbstract";
import { ElementInfo } from "../../models/ElementInfo";
import { CommandEnums, PointTypeEnum } from "../Enums";


export class  ArcThreePoint  extends BaseCommandAbstract{

    constructor(radius:number,drawId: string, layerId: string, penId: string){
        super(radius,drawId,layerId,penId)
    }

    async controlCommandAsync(): Promise<ElementInfo> {
        this.selectedElementTypeId=CommandEnums.arcThreePoint
        return this.pointList.length == 3 ? await this.addArcAsync() : await this.errorMessageAsync(3)
    }

    async addArcAsync():Promise<ElementInfo>{
        const centerAndRadius=await GeoService.findCenterAndRadiusAsync(this.pointList[0],this.pointList[1],this.pointList[2])
        if(centerAndRadius){
            const startstop=await GeoService.findStartAndStopAngleAsync(centerAndRadius.centerPoint,this.pointList[0],this.pointList[1],this.pointList[2])
            if(startstop){
                const elemnt=await this.createElementAsync(startstop,centerAndRadius.radius,centerAndRadius.centerPoint)
                this.finishCommand()
                return {element:elemnt,isTrue:true}
            }
            else this.finishCommand()
        }
        else this.finishCommand()
        return {isTrue:false,message:"GeoService cant use or values cant calculate"}
    }

    async getSSAnglesAsync(ss:StartAndStop):Promise<SSAngle[]>{
        let start=new SSAngle()
        start.Value=ss.startAngle
        start.Type="start"
        let stop=new SSAngle()
        stop.Value=ss.stopAngle
        stop.Type="stop"
        return [start,stop]
    }

    async getRadiusAsync(r:number):Promise<Radius>{
        let radius=new Radius()
        radius.Value=r
        return radius
    }

    async getPoints(centerPoint:PointGeo):Promise<Point[]>{
        const p1=await this.createPointAsync(this.pointList[0].X,this.pointList[1].Y,PointTypeEnum.end)
        const p2=await this.createPointAsync(this.pointList[1].X,this.pointList[1].Y,PointTypeEnum.end)
        const p3=await this.createPointAsync(this.pointList[2].X,this.pointList[2].Y,PointTypeEnum.end)
        const center=await this.createPointAsync(centerPoint.X,centerPoint.Y,PointTypeEnum.end)
        return [center,p1,p2,p3]
    }

    async createElementAsync(ss:StartAndStop,r:number,centerPoint:PointGeo):Promise<Element>{
        const radius = await this.getRadiusAsync(r)
        const points=await this.getPoints(centerPoint)
        const ssangles=await this.getSSAnglesAsync(ss)
        return this.createElementManyPointAsync(this.selectedElementTypeId,points,[radius],ssangles)
        
    }
    
}