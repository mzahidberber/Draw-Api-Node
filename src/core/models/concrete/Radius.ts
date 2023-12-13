import { AutoMap } from "@automapper/classes"
import { EntityAbstract } from "../abstract/EntityAbstract"
import { Element } from "./Element"



export class Radius extends EntityAbstract<string>{
    @AutoMap()
    id!: string
    @AutoMap()
    Value!:number
    @AutoMap(()=>Element)
    Element!:Element
    @AutoMap()
    ElementId!:string
}
