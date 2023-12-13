import mongoose, { ClientSession, Model } from "mongoose";
import { IEntity } from "../../../../core/models/abstract/IEntity";
import { DataInfo } from "../../../models/DataInfo";
import { IEntityRepository } from "../IEntityRepository";
import { injectable } from "inversify";
import { ObjectId } from "mongodb";

@injectable()
export class EntityRepositoryAbstract <T extends IEntity<any>> implements IEntityRepository<T>{
    private _session:ClientSession | undefined
    constructor(private model:Model<any>,private type:new ()=>T){
    }   
    

    async CreateTransaction(){
        if(this._session == undefined){
            this._session=await mongoose.startSession()
            this._session.startTransaction()
        }
    }

    async CommitAsync(state: boolean=true): Promise<boolean> {
        await this.CreateTransaction()
        if(this._session){
            if(state) await this._session.commitTransaction()
            else await this._session.abortTransaction()
            await this._session.endSession()
        }
        else return false
        return true
    }

    async GetAllAsync(userId: string): Promise<T[]> {
        await this.CreateTransaction()
        return await this.model.find({UserId:userId})
    }

    async GetWhereAsync(userId: string, filter: Record<any,any>): Promise<T[]> {
        await this.CreateTransaction()
        filter['UserId']=userId
        return await this.model.find(filter)
    }

    async GetByIdAsync(userId: string, id: string): Promise<T | null> {
        await this.CreateTransaction()
        const result=await this.model.find({_id:new ObjectId(id),UserId:userId})
        return result.length<=0 ? null : result[0]
    }

    async GetByIdsAsync(userId: string, ids: string[]): Promise<T[]> {
        await this.CreateTransaction()
        return await this.model.find({UserId:userId,_id:{$in:ids}})
    }

    async AddAsync(entity: T[]): Promise<DataInfo<T[] | null>> {
        await this.CreateTransaction()
        try {
            const result=await this.model.insertMany(entity)
            return new DataInfo(true,result)
        } catch (err:any) {
            return new DataInfo(false,null,err.message)
        }
    }

    async UpdateAsync(entity: T[]): Promise<DataInfo<T[] | null>> {
        await this.CreateTransaction()
        try {
            for(const i of entity){
                await this.model.findByIdAndUpdate(new ObjectId(i.id),i)
            }
            return new DataInfo(true)
        } catch (error:any) {
            return new DataInfo(false,null,error.message)
        }
    }
    
    async DeleteAsync(ids: string[]): Promise<boolean> {
        await this.CreateTransaction()
        try {
            await this.model.deleteMany({_id:{$in:ids}})
            return true
        } catch (error:any) {
            return false
        }
    }
    

}