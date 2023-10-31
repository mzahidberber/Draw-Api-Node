import { AutoMap } from "@automapper/classes"
import { EntityAbstract } from "../abstract/EntityAbstract"


export class UserRoles extends EntityAbstract<string>{
    @AutoMap()
    UserId!:string
    @AutoMap()
    RoleId!:string
}
