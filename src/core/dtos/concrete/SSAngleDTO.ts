import { AutoMap } from "@automapper/classes"
import { IDTOAbstract } from "../abstract/IDTOAbstract"



export class SSAngleDTO extends IDTOAbstract<string>{
    @AutoMap()
    id?: string
    @AutoMap()
    Type!:string
    @AutoMap()
    Value!:number
    @AutoMap()
    ElementId!:string
}
