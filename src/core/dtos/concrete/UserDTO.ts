import { AutoMap } from "@automapper/classes";
import { IDTOAbstract } from "../abstract/IDTOAbstract";


export class UserDTO extends IDTOAbstract<string>{
    @AutoMap()
    Id?: string
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
    // @AutoMap(()=>[Draw])
    // DrawElements:Draw[]
    

    // constructor(){
    //     super()
    //     this.DrawElements=[]
    // }
}