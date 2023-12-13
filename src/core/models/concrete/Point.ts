import { AutoMap } from "@automapper/classes"
import { EntityAbstract } from "../abstract/EntityAbstract"
import { Element } from "./Element"



export class Point extends EntityAbstract<string>{
    @AutoMap()
    id!: string
    @AutoMap()
    X!:number
    @AutoMap()
    Y!:number
    @AutoMap(()=>Element)
    Element?:Element
    @AutoMap()
    ElementId!:string
    @AutoMap()
    PointTypeId!:string
}
