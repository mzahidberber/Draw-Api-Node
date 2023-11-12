import { AutoMap } from "@automapper/classes"
import { IDTOAbstract } from "../abstract/IDTOAbstract"
import { ElementDTO } from "./ElementDTO"
import { LayerDTO } from "./LayerDTO"



export class PenDTO extends IDTOAbstract<number>{
    @AutoMap()
    Id?: number
    @AutoMap()
    Name!:string
    @AutoMap()
    Red!:number
    @AutoMap()
    Blue!:number
    @AutoMap()
    Green!:number
    @AutoMap()
    UserId!:string
    @AutoMap()
    PenStyleId!:number
    @AutoMap(()=>[LayerDTO])
    Layers:LayerDTO[]
    @AutoMap(()=>[ElementDTO])
    Elements:ElementDTO[]

    constructor(){
        super()
        this.Layers=[]
        this.Elements=[]
    }
}
