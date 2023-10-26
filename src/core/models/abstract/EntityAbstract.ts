import { AutoMap } from "@automapper/classes";
import IEntity from "./IEntity";


abstract class EntityAbstract<T> implements IEntity<T>{
    @AutoMap()
    id!: T;
    @AutoMap()
    createdAt!: Date;
    @AutoMap()
    updatedAt!: Date;
    
}

export default EntityAbstract