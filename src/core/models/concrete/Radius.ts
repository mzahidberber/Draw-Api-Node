import { AutoMap } from "@automapper/classes"
import { EntityAbstract } from "../abstract/EntityAbstract"



export class Radius extends EntityAbstract<number>{
    @AutoMap()
    Value!:number
    @AutoMap()
    ElementId!:number
}
