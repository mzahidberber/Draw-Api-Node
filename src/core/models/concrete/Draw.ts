import { AutoMap } from "@automapper/classes"
import { EntityAbstract } from "../abstract/EntityAbstract"
import { Layer } from "./Layer"


export class Draw extends EntityAbstract<number>{
    @AutoMap()
    Name!:string
    @AutoMap()
    UserId!:string
    @AutoMap(()=>[Layer])
    Layers:Layer[]
    @AutoMap()
    NumberOfLayerElements!:number

    constructor(){
        super()
        this.Layers=[]
    }
}
