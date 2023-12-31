import { AutoMap } from "@automapper/classes"
import { IDTOAbstract } from "../abstract/IDTOAbstract"
import { PointDTO } from "./PointDTO"

export class PointTypeDTO extends IDTOAbstract<string>{
    @AutoMap()
    id?: string
    @AutoMap()
    Name!:string
    @AutoMap(()=>[PointDTO])
    Points:PointDTO[]

    constructor(){
        super()
        this.Points=[]
    }
}
