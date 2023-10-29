import { AutoMap } from "@automapper/classes"
import EntityAbstract from "../abstract/EntityAbstract"


class UserRole extends EntityAbstract<string>{
    @AutoMap()
    Name!:string
    @AutoMap()
    ConcurrencyStamp!:string
}

export default UserRole