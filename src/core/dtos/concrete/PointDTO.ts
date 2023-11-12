import { AutoMap } from "@automapper/classes"
import { IDTOAbstract } from "../abstract/IDTOAbstract"



export class PointDTO extends IDTOAbstract<number>{
    @AutoMap()
    Id?: number
    @AutoMap()
    X?:number
    @AutoMap()
    Y?:number
    @AutoMap()
    ElementId!:number
    @AutoMap()
    PointTypeId!:number
}
