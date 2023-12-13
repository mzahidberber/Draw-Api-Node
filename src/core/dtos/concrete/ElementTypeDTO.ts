import { AutoMap } from "@automapper/classes"
import { IDTOAbstract } from "../abstract/IDTOAbstract"
import { ElementDTO } from "./ElementDTO"


export class ElementTypeDTO extends IDTOAbstract<string>{
    @AutoMap()
    id?: string
    @AutoMap()
    Name!:string
    @AutoMap(()=>[ElementDTO])
    Elements: ElementDTO[]

    constructor(){
        super()
        this.Elements=[]
    }

    
}
