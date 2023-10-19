import IEntity from "../abstract/IEntity"



class Element implements IEntity{
    id: number

    constructor(id:number){
        this.id=id
    }
}

export default Element