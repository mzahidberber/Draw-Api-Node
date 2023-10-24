import IEntity from "../abstract/IEntity"


class Layer implements IEntity{
    id!: number
    name!:string
    lock!:boolean
    visibility!:boolean
    thickness!:number
    numberOfElements!:number
    DrawId!:number
    Elements:Element[]=[]
    readonly createdAt!: Date
    readonly updatedAt!: Date
}

export default Layer