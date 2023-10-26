import { AutoMap } from "@automapper/classes"
import EntityAbstract from "../abstract/EntityAbstract"
import Layer from "./Layer"


class Draw extends EntityAbstract<number>{
    name!:string
    UserId!:number
    Layers:Layer[] = []
}

export default Draw