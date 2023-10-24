import IEntity from "../abstract/IEntity"



class Element implements IEntity{
    id!: number
    LayerId!:number
    readonly createdAt!: Date
    readonly updatedAt!: Date
    
}

export default Element