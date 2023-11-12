import { AutoMap } from "@automapper/classes"
import { EntityAbstract } from "../abstract/EntityAbstract";
import { Point } from "./Point";
import { SSAngle } from "./SSAngle";
import { Radius } from "./Radius";
import { Layer } from "./Layer";



export class Element extends EntityAbstract<number>{
    @AutoMap()
    Id!: number
    @AutoMap()
    LayerId!:number
    @AutoMap(()=>Layer)
    Layer!:Layer
    @AutoMap()
    PenId!:number
    @AutoMap()
    ElementTypeId!:number
    @AutoMap(()=>[Point])
    Points: Point[]
    @AutoMap(()=>[SSAngle])
    SSAngles: SSAngle[]
    @AutoMap(()=>[Radius])
    Radiuses: Radius[]

    constructor(){
        super()
        this.Points=[]
        this.SSAngles=[]
        this.Radiuses=[]
    }

    
}
