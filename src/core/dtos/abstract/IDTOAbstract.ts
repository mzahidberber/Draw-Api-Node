import { AutoMap } from "@automapper/classes";
import { IDTO } from "./IDTO";



export abstract class IDTOAbstract<T> implements IDTO<T>{
    @AutoMap()
    id?: T;
    @AutoMap()
    createdAt?: Date;
    @AutoMap()
    updatedAt?: Date;
    
}
