import { AutoMap } from "@automapper/classes";
import { IDTOAbstract } from "../abstract/IDTOAbstract";


export class DrawDTO extends IDTOAbstract<number>{
    @AutoMap()
    Id?: number
    @AutoMap()
    Name?:string
    @AutoMap()
    UserId?:string
    // @AutoMap(()=>[Layer])
    // Layers:Layer[]
    @AutoMap()
    NumberOfLayerElements?:number

    // constructor(){
    //     super()
    //     this.Layers=[]
    // }
}