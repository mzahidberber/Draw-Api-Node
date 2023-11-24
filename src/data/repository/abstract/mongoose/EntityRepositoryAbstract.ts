import { Model } from "mongoose";
import { IEntity } from "../../../../core/models/abstract/IEntity";
import { DataInfo } from "../../../models/DataInfo";
import { IEntityRepository } from "../IEntityRepository";

export class EntityRepositoryAbstract <T extends IEntity<any>> implements IEntityRepository<T>{

    constructor(private model:Model<any>,private type:new ()=>T){
        
    }   

    GetAllAsync(userId: string): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    GetWhereAsync(userId: string, filter: {}): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    GetByIdAsync(userId: string, id: number): Promise<T | null> {
        throw new Error("Method not implemented.");
    }
    AddAsync(entity: T[]): Promise<DataInfo<T[] | null>> {
        throw new Error("Method not implemented.");
    }
    UpdateAsync(entity: T[]): Promise<DataInfo<T[] | null>> {
        throw new Error("Method not implemented.");
    }
    DeleteAsync(ids: number[]): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    CommitAsync(state: boolean): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}