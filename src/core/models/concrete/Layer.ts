import { AutoMap } from "@automapper/classes"
import {Element} from "./Element"
import { EntityAbstract } from "../abstract/EntityAbstract"
import { Draw } from "./Draw"


export class Layer extends EntityAbstract<string>{
    @AutoMap()
    id!: string;
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
    @AutoMap(()=>Draw)
    Draw!:Draw
    @AutoMap()
    DrawId!:string
    @AutoMap()
    PenId!:string
    @AutoMap(()=>[Element])
    Elements:Element[]

    constructor(){
        super()
        this.Elements=[]
    }
}
