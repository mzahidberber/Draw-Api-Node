import { AutoMap } from "@automapper/classes"
import EntityAbstract from "../abstract/EntityAbstract"



class Point extends EntityAbstract<number>{
    @AutoMap()
    x!:number
    @AutoMap()
    y!:number
    @AutoMap()
    ElementId!:number
}

export default Point