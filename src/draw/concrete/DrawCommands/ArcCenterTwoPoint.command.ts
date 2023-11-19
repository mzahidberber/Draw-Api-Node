import { Element } from "../../../core/models/concrete/Element";
import { Point } from "../../../core/models/concrete/Point";
import { Radius } from "../../../core/models/concrete/Radius";
import { SSAngle } from "../../../core/models/concrete/SSAngle";
import { PointGeo } from "../../../core/models/others/PointGeo";
import { GeoService } from "../../../core/services/GeoService/GeoService";
import { StartAndStop } from "../../../core/services/GeoService/model/StartAndStop";
import { BaseCommandAbstract } from "../../abstract/BaseCommandAbstract";
import { ElementInfo } from "../../models/ElementInfo";
import { DrawMath } from "../Helpers/DrawMath";


export class  ArcCenterTwoPoint  extends BaseCommandAbstract{

    constructor(radius:number,drawId: number, layerId: number, penId: number){
        super(radius,drawId,layerId,penId)
    }

    async controlCommandAsync(): Promise<ElementInfo> {
        this.selectedElementTypeId=4
        return this.pointList.length == 3 ? await this.addArcAsync() : await this.errorMessageAsync(3)
    }

    async addArcAsync():Promise<ElementInfo>{
        const startstop=await GeoService.findStartAndStopAngleTwoPointAsync(this.pointList[0],this.pointList[1],this.pointList[2])
        const radius=await GeoService.findLengthLineAsync(this.pointList[0],this.pointList[1])
        if(startstop && radius){
            const angle1= (-startstop.stopAngle/32)+(-startstop.startAngle/16)
            const angle2= (-startstop.stopAngle/16)+(-startstop.startAngle / 16)
            const p3=await GeoService.findPointOnCircleAsync(this.pointList[0],radius,angle1)
            const p4=await GeoService.findPointOnCircleAsync(this.pointList[0],radius,angle2)
            if(p3 && p4){
                const elemnt=await this.createElementAsync(startstop,radius,p3,p4)
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

    async getPoints(ss:StartAndStop,p3Data:PointGeo,p4Data:PointGeo):Promise<Point[]>{
        const p1=await this.createPointAsync(this.pointList[0].X,this.pointList[1].Y,1)
        const p2=await this.createPointAsync(this.pointList[1].X,this.pointList[1].Y,1)
        const p3=await this.createPointAsync(p3Data.X,p3Data.Y,1)
        const p4=await this.createPointAsync(p4Data.X,p4Data.Y,1)
        return [p1,p2,p3,p4]
    }

    async createElementAsync(ss:StartAndStop,r:number,p3Data:PointGeo,p4Data:PointGeo):Promise<Element>{
        const radius = await this.getRadiusAsync(r)
        const points=await this.getPoints(ss,p3Data,p4Data)
        const ssangles=await this.getSSAnglesAsync(ss)
        return this.createElementManyPointAsync(this.selectedElementTypeId,points,[radius],ssangles)
        
        
        
    }
    
}