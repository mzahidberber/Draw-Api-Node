import IEntity from "../abstract/IEntity"
import Layer from "./Layer"


class Draw implements IEntity{
    id!: number
    name!:string
    UserId!:number
    Layers:Layer[] = []
    readonly createdAt!: Date
    readonly updatedAt!: Date
}

export default Draw