import { AutoMap } from "@automapper/classes"
import { IDTOAbstract } from "../abstract/IDTOAbstract"



export class RadiusDTO extends IDTOAbstract<string>{
    @AutoMap()
    id?: string
    @AutoMap()
    Value!:number
    @AutoMap()
    ElementId!:string
}
