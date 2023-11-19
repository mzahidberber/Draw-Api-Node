import { AutoMap } from "@automapper/classes"
import { EntityAbstract } from "../abstract/EntityAbstract"
import { Element } from "./Element"



export class Point extends EntityAbstract<number>{
    @AutoMap()
    Id!: number
    @AutoMap()
    X!:number
    @AutoMap()
    Y!:number
    @AutoMap(()=>Element)
    Element?:Element
    @AutoMap()
    ElementId!:number
    @AutoMap()
    PointTypeId!:number
}
