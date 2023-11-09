import { AutoMap } from "@automapper/classes"
import { EntityAbstract } from "../abstract/EntityAbstract"
import { Element } from "./Element"



export class SSAngle extends EntityAbstract<number>{
    @AutoMap()
    Type!:string
    @AutoMap()
    Value!:number
    @AutoMap(()=>Element)
    Element!:Element
    @AutoMap()
    ElementId!:number
}
