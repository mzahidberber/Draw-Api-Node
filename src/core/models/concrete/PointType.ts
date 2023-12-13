import { AutoMap } from "@automapper/classes"
import { EntityAbstract } from "../abstract/EntityAbstract"
import { Point } from "./Point"



export class PointType extends EntityAbstract<string>{
    @AutoMap()
    id!: string
    @AutoMap()
    Name!:string
    @AutoMap(()=>[Point])
    Points:Point[]

    constructor(){
        super()
        this.Points=[]
    }
}
