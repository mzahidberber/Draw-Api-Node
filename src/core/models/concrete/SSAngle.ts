import { AutoMap } from "@automapper/classes"
import EntityAbstract from "../abstract/EntityAbstract"



class SSAngle extends EntityAbstract<number>{
    @AutoMap()
    Type!:string
    @AutoMap()
    Value!:number
    @AutoMap()
    ElementId!:number
}

export default SSAngle