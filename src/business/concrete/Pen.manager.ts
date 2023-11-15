import { injectable } from "inversify";
import { CustomResponse } from "../../core/dtos/CustomResponse";
import { DataTypes } from "../../data/dependencyresolvers/DataTypes";
import { DataContainer } from "../../data/dependencyresolvers/dataInstanceFactory.config";
import { ServiceAbstract } from "../abstract/ServiceAbstract";
import { IPenService } from "../abstract/IPen.service";
import { PenDTO } from "../../core/dtos/concrete/PenDTO";
import { Pen } from "../../core/models/concrete/Pen";
import { IPenRepository } from "../../data/repository/abstract/IPenRepository";
import { LogAspectClass } from "../../core/aspects/logging/LogAspect";


@injectable()
@LogAspectClass()
export class PenManager extends ServiceAbstract implements IPenService{
    private _penDal:IPenRepository
    constructor(){
        super()
        this._penDal=DataContainer.get<IPenRepository>(DataTypes.IPenRepository)
    }
    async GetWhereAsync(userId: string, filter: Partial<PenDTO>): Promise<CustomResponse<PenDTO[]>> {
        filter.UserId=userId
        return await this.BaseGetWhereAsync(userId,filter,this._penDal,Pen,PenDTO)
    }
    async GetAllAsync(userId: string): Promise<CustomResponse<PenDTO[]>> {
        return await this.BaseGetAllAsync(userId,{UserId:userId},this._penDal,Pen,PenDTO)
    }
    async GetAsync(userId: string, entityId: number): Promise<CustomResponse<PenDTO>> {
        return await this.BaseGetAsync(entityId,userId,this._penDal,Pen,PenDTO)
    }
    async AddAllAsync(userId: string, entities: PenDTO[]): Promise<CustomResponse<PenDTO[]>> {
        for (let i = 0; i < entities.length; i++) {
            const element = entities[i]
            element.UserId=userId

        }
        return await this.BaseAddAllAsync(entities,this._penDal,Pen,PenDTO)
    }
    async UpdateAllAsync(userId: string, entities: PenDTO[]): Promise<CustomResponse<any>> {
        return await this.BaseUpdateAllAsync(entities,this._penDal,Pen,PenDTO,async ()=>{
            const result=await this._penDal.GetWhereAsync(userId,{Id:entities.map(x=>x.Id)})
            if (result.length != entities.length) return false
            return true
        })
    }
    async DeleteAllAsync(userId: string, ids: number[]): Promise<CustomResponse<any>> {
        return await this.BaseDeleteAllAsync(ids,this._penDal,async ()=>{
            const result=await this._penDal.GetWhereAsync(userId,{id:ids})
            if (result.length != ids.length) return false
            return true
        })
    }

}