import { AutoMap } from "@automapper/classes"
import { IDTOAbstract } from "../abstract/IDTOAbstract"
import { ElementDTO } from "./ElementDTO"
import { Draw } from "../../models/concrete/Draw"
import { DrawDTO } from "./DrawDTO"

export class LayerDTO extends IDTOAbstract<string>{
    @AutoMap()
    id?: string;
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
    DrawId?:string
    @AutoMap()
    PenId?:string
    @AutoMap(()=>[ElementDTO])
    Elements?:ElementDTO[]

    constructor(){
        super()
        this.Elements=[]
    }
}