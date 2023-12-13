import { AutoMap } from "@automapper/classes"
import { EntityAbstract } from "../abstract/EntityAbstract"
import { Pen } from "./Pen"


export class PenStyle extends EntityAbstract<string>{
    @AutoMap()
    id!: string
    @AutoMap()
    Name!:string
    @AutoMap(()=>[Pen])
    Pens:Pen[]

    constructor(){
        super()
        this.Pens=[]
    }
}
