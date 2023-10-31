import { AutoMap } from "@automapper/classes";
import { IEntity } from "./IEntity";


export abstract class EntityAbstract<T> implements IEntity<T>{
    @AutoMap()
    Id!: T;
    @AutoMap()
    createdAt!: Date;
    @AutoMap()
    updatedAt!: Date;
    
}
