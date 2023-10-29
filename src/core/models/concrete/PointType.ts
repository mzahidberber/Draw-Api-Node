import { AutoMap } from "@automapper/classes"
import EntityAbstract from "../abstract/EntityAbstract"
import Point from "./Point"



class PointType extends EntityAbstract<number>{
    @AutoMap()
    Name!:string
    @AutoMap()
    Points:Point[]

    constructor(){
        super()
        this.Points=[]
    }
}

export default PointType