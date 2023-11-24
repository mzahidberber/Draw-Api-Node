import { injectable } from "inversify";
import { CustomResponse } from "../../core/dtos/CustomResponse";
import { DrawDTO } from "../../core/dtos/concrete/DrawDTO";
import { DataLayerTypes } from "../../data/dependencyresolvers/DataTypes";
import { DataContainer } from "../../data/dependencyresolvers/dataInstanceFactory.config";
import { IDrawRepository } from "../../data/repository/abstract/IDrawRepository";
import { IDrawService } from "../abstract/IDraw.service";
import { ServiceAbstract } from "../abstract/ServiceAbstract";
import { Draw } from "../../core/models/concrete/Draw";
import { LogAspectClass } from "../../core/aspects/logging/LogAspect";


@injectable()
@LogAspectClass()
export class DrawManager extends ServiceAbstract implements IDrawService{
    private _drawDal:IDrawRepository
    constructor(){
        super()
        this._drawDal=DataContainer.get<IDrawRepository>(DataLayerTypes.IDrawRepository)
    }
    async GetLayersAsync(userId: string, drawId: number): Promise<CustomResponse<DrawDTO[]>> {
        throw new Error("Method not implemented.");
    }
    async GetWhereAsync(userId: string, filter: Partial<DrawDTO>): Promise<CustomResponse<DrawDTO[]>> {
        filter.UserId=userId
        return await this.BaseGetWhereAsync(userId,filter,this._drawDal,Draw,DrawDTO)
    }
    
    async GetAllAsync(userId: string): Promise<CustomResponse<DrawDTO[]>> {
        return await this.BaseGetAllAsync(userId,{UserId:userId},this._drawDal,Draw,DrawDTO)
    }
    async GetAsync(userId: string, entityId: number): Promise<CustomResponse<DrawDTO>> {
        return await this.BaseGetAsync(entityId,userId,this._drawDal,Draw,DrawDTO)
    }
    async AddAllAsync(userId: string, entities: DrawDTO[]): Promise<CustomResponse<DrawDTO[]>> {
        for (let i = 0; i < entities.length; i++) {
            const element = entities[i]
            element.UserId=userId

        }
        return await this.BaseAddAllAsync(entities,this._drawDal,Draw,DrawDTO)
    }
    async UpdateAllAsync(userId: string, entities: DrawDTO[]): Promise<CustomResponse<any>> {
        return await this.BaseUpdateAllAsync(entities,this._drawDal,Draw,DrawDTO,async ()=>{
            const result=await this._drawDal.GetWhereAsync(userId,{Id:entities.map(x=>x.Id)})
            if (result.length != entities.length) return false
            return true
        })
    }
    async DeleteAllAsync(userId: string, ids: number[]): Promise<CustomResponse<any>> {
        return await this.BaseDeleteAllAsync(ids,this._drawDal,async ()=>{
            const result=await this._drawDal.GetWhereAsync(userId,{id:ids})
            if (result.length != ids.length) return false
            return true
        })
    }

}