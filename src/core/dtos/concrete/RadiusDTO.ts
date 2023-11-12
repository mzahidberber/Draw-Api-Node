import { AutoMap } from "@automapper/classes"
import { IDTOAbstract } from "../abstract/IDTOAbstract"



export class RadiusDTO extends IDTOAbstract<number>{
    @AutoMap()
    Id?: number
    @AutoMap()
    Value!:number
    @AutoMap()
    ElementId!:number
}