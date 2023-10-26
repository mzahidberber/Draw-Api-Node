import { AutoMap } from "@automapper/classes"
import EntityAbstract from "../abstract/EntityAbstract"
import Point from "./Point";



class Element extends EntityAbstract<number>{
    @AutoMap()
    LayerId!:number
    @AutoMap(()=>[Point])
    Points: Point[]=[];
    
}

export default Element