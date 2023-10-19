import { sequelize } from '../../sequelize/database';
import {  Sequelize, Transaction } from 'sequelize';
import IEntityReposity from '../../../core/data/abstract/IEntityRepository'
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

    private getModel(modelName: string): ModelCtor<Model> {
        const model = this._context.models[modelName];
        if (model) {
          return model as ModelCtor<Model>;
        } else {
          throw new Error(`Model not found: ${modelName}`);
        }
      }

    
    
    async CommitAsync(state: boolean=true): Promise<boolean> {
        if(this._transaction){
            if(state) await this._transaction.commit()
            else await this._transaction.rollback()
        }else return false
        return true
        
    }
    async GetAllAsync(): Promise<T[]> {
        let entities=await this._model.findAll()
        console.log(entities)
        return []
    }
    async GetWhereAsync(filter: {}): Promise<T[]> {
        throw new Error('Method not implemented.');
    }
    GetByIdAsync(id: number): Promise<T> {
        throw new Error('Method not implemented.');
    }
    async AddAsync(entity: T): Promise<void> {
        await this._model.create({id:entity.id},{transaction:this._transaction})
        await this.CommitAsync()
    }
    Update(entity: T): void {
        throw new Error('Method not implemented.');
    }
    Delete(entity: T): void {
        throw new Error('Method not implemented.');
    }

}

export default EntityRepositoryAbstract