import { AutoMap } from "@automapper/classes";
import { IDTOAbstract } from "../abstract/IDTOAbstract";


export class DrawDTO extends IDTOAbstract<string>{
    @AutoMap()
    id?: string
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