import IEntity from "../abstract/IEntity"



class Point implements IEntity{
    id!: number
    x!:number
    y!:number
    ElementId!:number
    readonly createdAt!: Date
    readonly updatedAt!: Date
}

export default Point