import { AutoMap } from "@automapper/classes"
import EntityAbstract from "../abstract/EntityAbstract"



class Point extends EntityAbstract<number>{
    @AutoMap()
    X!:number
    @AutoMap()
    Y!:number
    @AutoMap()
    ElementId!:number
    @AutoMap()
    PointTypeId!:number
}

export default Point