import { AutoMap } from "@automapper/classes"
import { EntityAbstract } from "../abstract/EntityAbstract"


export class UserRole extends EntityAbstract<string>{
    @AutoMap()
    Id!: string
    @AutoMap()
    Name!:string
    @AutoMap()
    ConcurrencyStamp!:string
}