import { AutoMap } from "@automapper/classes"
import EntityAbstract from "../abstract/EntityAbstract"
import Pen from "./Pen"



class PenStyle extends EntityAbstract<number>{
    @AutoMap()
    Name!:string
    @AutoMap(()=>[Pen])
    Pens:Pen[]

    constructor(){
        super()
        this.Pens=[]
    }
}

export default PenStyle