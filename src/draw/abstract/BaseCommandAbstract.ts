import { CoreContainer, CoreTypes } from "../../core/dependenctresolvers/controllerInstanceFactory.config";
import { Element } from "../../core/models/concrete/Element";
import { Point } from "../../core/models/concrete/Point";
import { Radius } from "../../core/models/concrete/Radius";
import { SSAngle } from "../../core/models/concrete/SSAngle";
import { PointGeo } from "../../core/models/others/PointGeo";
import { ElementInfo } from "../models/ElementInfo";
import { IBaseCommand } from "./IBaseCommand";


export abstract class BaseCommandAbstract implements IBaseCommand{
    public pointList: PointGeo[]=[]
    public selectedElementTypeId: number=0
    public selectedDrawId: number;
    public selectedLayerId: number;
    public selectedPenId: number;
    public isCompleted:boolean = false
    public editList: Element[]=[];
    public radius:number
    public isFinish: boolean=false
    
    constructor(radius:number, drawId: number, layerId: number, penId: number){
        this.selectedDrawId=drawId
        this.selectedLayerId=layerId
        this.selectedPenId=penId
        this.radius=radius
    }
    
    

    protected async errorMessageAsync(nessasaryPoint:number=0,message?:string):Promise<ElementInfo>{
        let msg=""
        if(message) msg=message
        else msg=`Not Enough Points! Should Add Point.${nessasaryPoint}/${this.pointList.length}`
        return {isTrue:false,message:msg}
    }
    
    abstract controlCommandAsync(): Promise<ElementInfo>
    
    async addPointAsync(point: PointGeo): Promise<ElementInfo> {
        this.pointList.push(point)
        return await this.controlCommandAsync()
    }

    public finishCommand(): void {
        this.isCompleted=true
        this.pointList=[]
        this.editList=[]
        this.selectedElementTypeId=0
    }

    protected async createElementManyPointAsync(elementTypeId:number,points:Point[]=[],radiuses:Radius[]=[],ssangles:SSAngle[]=[]):Promise<Element>
    {
        let element=new Element()
        element.ElementTypeId=elementTypeId
        element.LayerId=this.selectedLayerId
        element.PenId=this.selectedPenId
        element.Points=points
        element.Radiuses=radiuses
        element.SSAngles=ssangles
        return element
    }

    protected async createPointAsync(pX:number,pY:number,pointTypeId:number):Promise<Point> {
        let point = new Point()
        point.X=pX
        point.Y=pY
        pointTypeId=pointTypeId
        return point
    }


}