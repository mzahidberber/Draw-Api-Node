import { AutoMap } from "@automapper/classes"
import EntityAbstract from "../abstract/EntityAbstract"


class UserRefreshToken extends EntityAbstract<string>{
    @AutoMap()
    UserId!:number
    @AutoMap()
    Code!:string
    @AutoMap()
    Expiration!:Date
}

export default UserRefreshToken