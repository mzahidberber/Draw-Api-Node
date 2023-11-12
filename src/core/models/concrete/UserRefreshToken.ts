import { AutoMap } from "@automapper/classes"
import { EntityAbstract } from "../abstract/EntityAbstract"


export class UserRefreshToken extends EntityAbstract<string>{
    @AutoMap()
    Id!: string
    @AutoMap()
    UserId!:number
    @AutoMap()
    Code!:string
    @AutoMap()
    Expiration!:Date
}
