import { AutoMap } from "@automapper/classes"
import { IDTOAbstract } from "../abstract/IDTOAbstract"



export class PointDTO extends IDTOAbstract<string>{
    @AutoMap()
    id?: string
    @AutoMap()
    X?:number
    @AutoMap()
    Y?:number
    @AutoMap()
    ElementId!:string
    @AutoMap()
    PointTypeId!:string
}
