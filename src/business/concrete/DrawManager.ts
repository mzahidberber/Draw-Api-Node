import { injectable } from "inversify";
import { CustomResponse } from "../../core/dtos/CustomResponse";
import { DrawDTO } from "../../core/dtos/concrete/DrawDTO";
import {DataTypes} from "../../data/dependencyresolvers/DataTypes";
import {DataContainer} from "../../data/dependencyresolvers/dataInstanceFactory.config";
import { IDrawRepository } from "../../data/repository/abstract/IDrawRepository";
import { IDrawService } from "../abstract/IDrawService";
import { ServiceAbstract } from "../abstract/ServiceAbstract";
import { Draw } from "../../core/models/concrete/Draw";


@injectable()
export class DrawManager extends ServiceAbstract implements IDrawService{
    private _drawDal:IDrawRepository
    constructor(){
        super()
        this._drawDal=DataContainer.get(DataTypes.IDrawRepository)
    }
    async GetLayersAsync(userId: string, drawId: number): Promise<CustomResponse<DrawDTO[]>> {
        throw new Error("Method not implemented.");
    }
    async GetWhereAsync(userId: string, filter: Partial<DrawDTO>): Promise<CustomResponse<DrawDTO[]>> {
        filter.UserId=userId
        return await this.BaseGetWhereAsync(filter,this._drawDal,Draw,DrawDTO)
    }
    async GetAllAsync(userId: string): Promise<CustomResponse<DrawDTO[]>> {
        return await this.BaseGetAllAsync({UserId:userId},this._drawDal,Draw,DrawDTO)
    }
    async GetAsync(userId: string, entityId: number): Promise<CustomResponse<DrawDTO>> {
        return await this.BaseGetAsync(entityId,userId,this._drawDal,Draw,DrawDTO)
    }
    async AddAllAsync(entities: DrawDTO[]): Promise<CustomResponse<DrawDTO[]>> {
        return await this.BaseAddAllAsync(entities,this._drawDal,Draw,DrawDTO)
    }
    async UpdateAllAsync(userId: string, entities: DrawDTO[]): Promise<CustomResponse<any>> {
        return await this.BaseUpdateAllAsync(entities,this._drawDal,Draw,DrawDTO,async ()=>{
            const result=await this._drawDal.GetWhereAsync({Id:entities.map(x=>x.Id),UserId:userId})
            console.log("restl",result)
            if (result.length != entities.length) return false
            return true
        })
    }
    async DeleteAllAsync(userId: string, ids: number[]): Promise<CustomResponse<any>> {
        return await this.BaseDeleteAllAsync(ids,this._drawDal,async ()=>{
            const result=await this._drawDal.GetWhereAsync({id:ids,userId:userId})
            if (result.length != ids.length) return false
            return true
        })
    }

}