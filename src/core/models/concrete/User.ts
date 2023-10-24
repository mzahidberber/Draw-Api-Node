import IEntity from "../abstract/IEntity"


class User implements IEntity{
    id!: number
    firstName!:string
    lastName!:string
    email!:string
    password!:string
    readonly createdAt!: Date
    readonly updatedAt!: Date
}

export default User