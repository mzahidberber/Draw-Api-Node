import { AutoMap } from "@automapper/classes"
import EntityAbstract from "../abstract/EntityAbstract"
import Element from "./Element"


class Layer extends EntityAbstract<number>{
    @AutoMap()
    name!:string
    @AutoMap()
    lock!:boolean
    @AutoMap()
    visibility!:boolean
    @AutoMap()
    thickness!:number
    @AutoMap()
    numberOfElements!:number
    @AutoMap()
    DrawId!:number
    @AutoMap(()=>[Element])
    Elements:Element[]

    constructor(){
        super()
        this.Elements=[]
    }
}

export default Layer