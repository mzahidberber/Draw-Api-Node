import { AutoMap } from "@automapper/classes"
import EntityAbstract from "../abstract/EntityAbstract"
import Draw from "./Draw"


class User extends EntityAbstract<string>{
    @AutoMap()
    FirstName!:string
    @AutoMap()
    LastName!:string
    @AutoMap()
    Email!:string
    @AutoMap()
    EmailConfirmed!:boolean
    @AutoMap()
    PasswordHash!:string
    @AutoMap(()=>[Draw])
    DrawElements:Draw[]
    

    constructor(){
        super()
        this.DrawElements=[]
    }
}

export default User