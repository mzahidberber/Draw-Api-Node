import { AutoMap } from "@automapper/classes"
import { EntityAbstract } from "../abstract/EntityAbstract"
import { Element } from "./Element"


export class ElementType extends EntityAbstract<number>{
    @AutoMap()
    Name!:string
    @AutoMap(()=>[Element])
    Elements: Element[]

    constructor(){
        super()
        this.Elements=[]
    }

    
}
