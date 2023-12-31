import {  Includeable, Sequelize, Transaction } from 'sequelize';
import { ModelCtor, Model} from 'sequelize-typescript'
import { dataMapper } from '../../../mapper/dataMapper';
import { injectable } from 'inversify';
import { IEntity } from '../../../../core/models/abstract/IEntity';
import { IEntityRepository } from '../IEntityRepository';
import { DataInfo } from '../../../models/DataInfo';
import { SequelizeConnect } from '../../../sequelize/SequelizeConnect';

@injectable()
export abstract class EntityRepositoryAbstract<T extends IEntity<any>> implements IEntityRepository<T>{
    private readonly _context:Sequelize
    private _transaction:Transaction | undefined
    private _model : ModelCtor<Model>
    private _type:new ()=>T
    
    constructor(model:ModelCtor<Model>,type:new ()=>T){
        this._type=type
        this._context=SequelizeConnect.getInstance().sequelize
        this._model=model
    }

    async CreateTransaction(){
        if(this._transaction == undefined){
            this._transaction=await this._context.transaction()
        }
    }
    async CommitAsync(state: boolean=true): Promise<boolean> {
        await this.CreateTransaction()
        if(this._transaction){
            if(state) await this._transaction.commit()
            else await this._transaction.rollback()
        }
        else return false
        return true
        
    }

    protected GetIncludeForUserId(userId:string):Includeable[]{
        return []
    }
    protected CheckEntitiesUserId(entites:T[]):T[]{
        return entites
    }
    protected CheckEntityUserId(entity:T):T | null{
        return entity
    }

    async GetAllAsync(userId:string): Promise<T[]> {
        await this.CreateTransaction()
        let entities=await this._model.findAll({include:this.GetIncludeForUserId(userId)})
        const entitiesMap=await dataMapper.mapArrayAsync<Model,T>(entities,this._model,this._type)
        return this.CheckEntitiesUserId(entitiesMap)

    }
    
    async GetWhereAsync(userId:string,filter: Partial<T>): Promise<T[]> {
        await this.CreateTransaction()
        const entites=await this._model.findAll({where:filter,include:this.GetIncludeForUserId(userId)})
        const entitiesMap=await dataMapper.mapArrayAsync<Model,T>(entites,this._model,this._type)
        return this.CheckEntitiesUserId(entitiesMap)
    }


    async GetByIdAsync(userId:string,id: string): Promise<T | null> {
        await this.CreateTransaction()
        let entity=await this._model.findByPk(id,{include:this.GetIncludeForUserId(userId)})
        if (!entity) return null
        const entitiesMap=await dataMapper.mapAsync<Model,T>(entity,this._model,this._type)
        return this.CheckEntityUserId(entitiesMap)
    }

    async GetByIdsAsync(userId: string, ids: string[]): Promise<T[]> {
        await this.CreateTransaction()
        const entites=await this._model.findAll({where:{id:ids},include:this.GetIncludeForUserId(userId)})
        const entitiesMap=await dataMapper.mapArrayAsync<Model,T>(entites,this._model,this._type)
        return this.CheckEntitiesUserId(entitiesMap)
    }
    
    async AddAsync(entities: T[]): Promise<DataInfo<T[] | null>> {
        await this.CreateTransaction()
        try {
            const data= await this._model.bulkCreate(entities.map(e=>this.ObjectFromDictionary(e)),{transaction:this._transaction})
            return new DataInfo(true,await dataMapper.mapArrayAsync(data,this._model,this._type))
        } catch (error:any) {
            return new DataInfo(false,null,error.message)
        }
    }
    async UpdateAsync(entities: T[]): Promise<DataInfo<T[] | null>> {
        await this.CreateTransaction()
        try {
            for (let i = 0; i < entities.length; i++) {
                const entity = entities[i];
                const data= await this._model.update(this.ObjectFromDictionary(entity),{where:{Id:entity.id},transaction:this._transaction})
            }
            return new DataInfo(true)
        } catch (error:any) {
            return new DataInfo(false,null,error.message)
        }
    }
    async DeleteAsync(ids: string[]): Promise<boolean> {
        await this.CreateTransaction()
        try {
            const data= await this._model.destroy({where:{id:ids}})
            return true
        } catch (error:any) {
            return false
        }
    }

    protected ObjectFromDictionary<T>(obj: T): Record<keyof T, any> {
        let result: Record<keyof T, any> ={} as Record<keyof T, any>
        for (const key of Object.keys(obj as object) as Array<keyof T>) {
            result[key] = obj[key]
        }
        return result
    }

}
