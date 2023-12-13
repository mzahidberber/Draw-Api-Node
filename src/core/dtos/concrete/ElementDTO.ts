import { AutoMap } from "@automapper/classes"
import { IDTOAbstract } from "../abstract/IDTOAbstract"
import { PointDTO } from "./PointDTO"
import { SSAngleDTO } from "./SSAngleDTO"
import { RadiusDTO } from "./RadiusDTO"
import { LayerDTO } from "./LayerDTO"

export class ElementDTO extends IDTOAbstract<string>{
    @AutoMap()
    id?: string
    // @AutoMap(()=>LayerDTO)
    Layer?:LayerDTO
    @AutoMap()
    LayerId!:string
    @AutoMap()
    PenId!:string
    @AutoMap()
    ElementTypeId!:string
    @AutoMap(()=>[PointDTO])
    Points: PointDTO[]
    @AutoMap(()=>[SSAngleDTO])
    SSAngles: SSAngleDTO[]
    @AutoMap(()=>[RadiusDTO])
    Radiuses: RadiusDTO[]

    constructor(){
        super()
        this.Points=[]
        this.SSAngles=[]
        this.Radiuses=[]
    }

    
}