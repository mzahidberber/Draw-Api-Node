import {IEntityRepository} from "./IEntityRepository";
import {User} from "../../../core/models/concrete/User";

export interface IUserRepository extends IEntityRepository<User>{
}
