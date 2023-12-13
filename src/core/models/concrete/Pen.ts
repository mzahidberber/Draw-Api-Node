import { AutoMap } from "@automapper/classes"
import { EntityAbstract } from "../abstract/EntityAbstract"
import { Layer } from "./Layer"
import { Element } from "./Element"



export class Pen extends EntityAbstract<string>{
    @AutoMap()
    id!: string
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
    PenStyleId!:string
    @AutoMap(()=>[Layer])
    Layers:Layer[]
    @AutoMap(()=>[Element])
    Elements:Element[]

    constructor(){
        super()
        this.Layers=[]
        this.Elements=[]
    }
}
