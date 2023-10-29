import { AutoMap } from "@automapper/classes"
import EntityAbstract from "../abstract/EntityAbstract"
import Element from "./Element"


class Layer extends EntityAbstract<number>{
    @AutoMap()
    Name!:string
    @AutoMap()
    Lock!:boolean
    @AutoMap()
    Visibility!:boolean
    @AutoMap()
    Thickness!:number
    @AutoMap()
    NumberOfElements!:number
    @AutoMap()
    DrawId!:number
    @AutoMap()
    PenId!:number
    @AutoMap(()=>[Element])
    Elements:Element[]

    constructor(){
        super()
        this.Elements=[]
    }
}

export default Layer