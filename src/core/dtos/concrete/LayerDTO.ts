import { AutoMap } from "@automapper/classes"
import { IDTOAbstract } from "../abstract/IDTOAbstract"
import { ElementDTO } from "./ElementDTO"
import { Draw } from "../../models/concrete/Draw"
import { DrawDTO } from "./DrawDTO"

export class LayerDTO extends IDTOAbstract<number>{
    @AutoMap()
    Id?: number;
    @AutoMap()
    Name?:string
    @AutoMap()
    Lock?:boolean
    @AutoMap()
    Visibility?:boolean
    @AutoMap()
    Thickness?:number
    @AutoMap()
    NumberOfElements?:number
    @AutoMap(()=>DrawDTO)
    Draw?:DrawDTO
    @AutoMap()
    DrawId?:number
    @AutoMap()
    PenId?:number
    @AutoMap(()=>[ElementDTO])
    Elements?:ElementDTO[]

    constructor(){
        super()
        this.Elements=[]
    }
}