import { AutoMap } from "@automapper/classes"
import { IDTOAbstract } from "../abstract/IDTOAbstract"



export class SSAngleDTO extends IDTOAbstract<number>{
    @AutoMap()
    Id?: number
    @AutoMap()
    Type!:string
    @AutoMap()
    Value!:number
    @AutoMap()
    ElementId!:number
}
