import IEntity from "../abstract/IEntity"



class Point implements IEntity{
    id: number

    constructor(id:number){
        this.id=id
    }
}

export default Point