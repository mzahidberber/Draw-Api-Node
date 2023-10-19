import IEntity from "../../models/abstract/IEntity"
import IUnitOfWork from "./IUnitOfWork"


interface IEntityRepository<T extends IEntity> extends IUnitOfWork{
    GetAllAsync():Promise<T[]>
    GetWhereAsync(filter:{}):Promise<T[]>
    GetByIdAsync(id:number):Promise<T>
    AddAsync(entity:T):Promise<void>
    Update(entity:T):void
    Delete(entity:T):void
}

export default IEntityRepository