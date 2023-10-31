import { sequelize } from '../../sequelize/database';
import {  Sequelize, Transaction } from 'sequelize';
import { ModelCtor, Model} from 'sequelize-typescript'
import { dataMapper } from '../../mapper/dataMapper';
import { injectable } from 'inversify';
import { IEntity } from '../../../core/models/abstract/IEntity';
import { IEntityRepository } from './IEntityRepository';

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
        this._context.transaction()
            .then(t=>{
                this._transaction=t
            }).catch()
    }

    async CommitAsync(state: boolean=true): Promise<boolean> {
        if(this._transaction){
            if(state) await this._transaction.commit()
            else await this._transaction.rollback()
        }
        else return false
        return true
        
    }
    async GetAllAsync(): Promise<T[]> {
        let entities=await this._model.findAll()
        return await dataMapper.mapArrayAsync<Model,T>(entities,this._model,this._type)
    }
    async GetWhereAsync(filter: Partial<T>): Promise<T[]> {
        let entites=await this._model.findAll({where:filter})
        return await dataMapper.mapArrayAsync<Model,T>(entites,this._model,this._type)
    }
    async GetByIdAsync(id: number): Promise<T | null> {
        let entity=await this._model.findByPk(id)
        if (entity) return await dataMapper.mapAsync<Model,T>(entity,this._model,this._type)
        return null
    }
    
    async AddAsync(entities: T[]): Promise<boolean> {
        for (let i = 0; i < entities.length; i++) {
            const entity = entities[i];
            await this._model.create(this.objectFromDictionary(entity),{transaction:this._transaction})
        }
        //düzenle
        return true
    }
    async UpdateAsync(entities: T[]): Promise<boolean> {
        //düzenle
        for (let i = 0; i < entities.length; i++) {
            const newEntity = entities[i];
            let lastEntity= await this._model.findByPk(newEntity.Id,{transaction:this._transaction})
            for(const key in lastEntity?.dataValues){
                console.log(key)
            }
            lastEntity?.save()
        }
        return await this.CommitAsync()
    }
    async DeleteAsync(ids: number[]): Promise<boolean> {
        for (let i = 0; i < ids.length; i++) {
            const id = ids[i];
            let lastEntity= await this._model.findByPk(id,{transaction:this._transaction})
            lastEntity?.destroy()
        }
        return true
    }

    protected objectFromDictionary<T>(obj: T): Record<keyof T, any> {
        let result: Record<keyof T, any> ={} as Record<keyof T, any>
        for (const key of Object.keys(obj as object) as Array<keyof T>) {
            result[key] = obj[key]
        }
        return result
    }

}
