import { sequelize } from '../../sequelize/database';
import {  Sequelize, Transaction } from 'sequelize';
import { ModelCtor, Model} from 'sequelize-typescript'
import { dataMapper } from '../../mapper/dataMapper';
import { injectable } from 'inversify';
import { IEntity } from '../../../core/models/abstract/IEntity';
import { IEntityRepository } from './IEntityRepository';
import { DataInfo } from '../../models/DataInfo';

@injectable()
export abstract class EntityRepositoryAbstract<T extends IEntity<any>> implements IEntityRepository<T>{
    private readonly _context:Sequelize
    private _transaction:Transaction | undefined
    private _model : ModelCtor<Model>
    private _type:new ()=>T
    
    constructor(model:ModelCtor<Model>,type:new ()=>T){
        this._type=type
        this._context=sequelize
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
    async GetAllAsync(): Promise<T[]> {
        await this.CreateTransaction()
        let entities=await this._model.findAll()
        return await dataMapper.mapArrayAsync<Model,T>(entities,this._model,this._type)
    }
    
    async GetWhereAsync(filter: Partial<T>): Promise<T[]> {
        await this.CreateTransaction()
        let entites=await this._model.findAll({where:filter})
        return await dataMapper.mapArrayAsync<Model,T>(entites,this._model,this._type)
    }
    async GetByIdAsync(id: number): Promise<T | null> {
        await this.CreateTransaction()
        let entity=await this._model.findByPk(id)
        if (entity) return await dataMapper.mapAsync<Model,T>(entity,this._model,this._type)
        return null
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
                const data= await this._model.update(this.ObjectFromDictionary(entity),{where:{Id:entity.Id},transaction:this._transaction})
            }
            return new DataInfo(true)
        } catch (error:any) {
            return new DataInfo(false,null,error.message)
        }
    }
    async DeleteAsync(ids: number[]): Promise<boolean> {
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
