import { AutoMap } from "@automapper/classes"
import EntityAbstract from "../abstract/EntityAbstract"


class UserRoles extends EntityAbstract<string>{
    @AutoMap()
    UserId!:string
    @AutoMap()
    RoleId!:string
}

export default UserRoles