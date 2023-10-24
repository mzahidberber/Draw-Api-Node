import { sequelize } from '../../sequelize/database';
import {  Sequelize, Transaction } from 'sequelize';
import IEntityReposity from './IEntityRepository'
import IEntity from '../../../core/models/abstract/IEntity';
import { ModelCtor, Model} from 'sequelize-typescript'
import { injectable } from 'inversify';

@injectable()
abstract class EntityRepositoryAbstract<T extends IEntity> implements IEntityReposity<T>{
    private readonly _context:Sequelize
    private _transaction:Transaction | undefined
    private _model : ModelCtor<Model>
    
    constructor(model:ModelCtor<Model>){
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
        let newEntities:T[]=[]
        entities.forEach(entity => {
            newEntities.push(this.trasformModelToModel(entity.dataValues))
        })
        return newEntities
    }
    async GetWhereAsync(filter: Partial<T>): Promise<T[]> {
        let entites=await this._model.findAll({where:filter})
        let newEntities:T[]=[]
        entites.forEach(entity => {
            newEntities.push(this.trasformModelToModel(entity.dataValues))
        })
        return newEntities
    }
    async GetByIdAsync(id: number): Promise<T | null> {
        let entity=await this._model.findByPk(id)
        if (entity) return this.trasformModelToModel(entity.dataValues)
        return null
    }
    
    async AddAsync(entities: T[]): Promise<boolean> {
        for (let i = 0; i < entities.length; i++) {
            const entity = entities[i];
            await this._model.create(this.objectFromDictionary(entity),{transaction:this._transaction})
        }
        return await this.CommitAsync()
    }
    async UpdateAsync(entities: T[]): Promise<boolean> {
        //düzenle
        for (let i = 0; i < entities.length; i++) {
            const newEntity = entities[i];
            let lastEntity= await this._model.findByPk(newEntity.id,{transaction:this._transaction})
            for(const key in lastEntity?.dataValues){
                console.log(key)
            }
            lastEntity?.save()
        }
        return await this.CommitAsync()
    }
    async DeleteAsync(entities: T[]): Promise<boolean> {
        for (let i = 0; i < entities.length; i++) {
            const newEntity = entities[i];
            let lastEntity= await this._model.findByPk(newEntity.id,{transaction:this._transaction})
            lastEntity?.destroy()
        }
        return await this.CommitAsync()
    }

    protected transformModelsToModels(entities:Record<keyof T, any>[]):T[]{
        let newEntities:T[]=[]
        entities.forEach(entity => {
            newEntities.push(this.trasformModelToModel(entity))
        })
        return newEntities
    }

    protected trasformModelToModel(data:Record<keyof T, any>):T{
        let model={} as T
        for(const key in data){
            model[key]=data[key]
        }

        return model
    }

    protected objectFromDictionary<T>(obj: T): Record<keyof T, any> {
        let result: Record<keyof T, any> ={} as Record<keyof T, any>
        for (const key of Object.keys(obj as object) as Array<keyof T>) {
            result[key] = obj[key]
        }
        return result
    }

}

export default EntityRepositoryAbstract