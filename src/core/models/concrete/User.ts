import EntityAbstract from "../abstract/EntityAbstract"


class User extends EntityAbstract<number>{
    firstName!:string
    lastName!:string
    email!:string
    password!:string
}

export default User