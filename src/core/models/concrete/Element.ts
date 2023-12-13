import { AutoMap } from "@automapper/classes"
import { EntityAbstract } from "../abstract/EntityAbstract";
import { Point } from "./Point";
import { SSAngle } from "./SSAngle";
import { Radius } from "./Radius";
import { Layer } from "./Layer";



export class Element extends EntityAbstract<string>{
    @AutoMap()
    id!: string
    @AutoMap()
    LayerId!:string
    @AutoMap(()=>Layer)
    Layer!:Layer
    @AutoMap()
    PenId!:string
    @AutoMap()
    ElementTypeId!:string
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
