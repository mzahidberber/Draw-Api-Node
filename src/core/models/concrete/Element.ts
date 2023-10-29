import { AutoMap } from "@automapper/classes"
import EntityAbstract from "../abstract/EntityAbstract"
import Point from "./Point";
import SSAngle from "./SSAngle";
import Radius from "./Radius";



class Element extends EntityAbstract<number>{
    @AutoMap()
    LayerId!:number
    @AutoMap()
    PenId!:number
    @AutoMap()
    TypeId!:number
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

export default Element