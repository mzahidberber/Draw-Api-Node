import { AutoMap } from "@automapper/classes"
import { EntityAbstract } from "../abstract/EntityAbstract"



export class Point extends EntityAbstract<number>{
    @AutoMap()
    X!:number
    @AutoMap()
    Y!:number
    @AutoMap()
    ElementId!:number
    @AutoMap()
    PointTypeId!:number
}
