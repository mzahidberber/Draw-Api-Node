import { injectable } from "inversify";
import { CustomResponse } from "../../core/dtos/CustomResponse";
import { PointDTO } from "../../core/dtos/concrete/PointDTO";
import { Point } from "../../core/models/concrete/Point";
import { DataTypes } from "../../data/dependencyresolvers/DataTypes";
import { DataContainer } from "../../data/dependencyresolvers/dataInstanceFactory.config";
import { IElementRepository } from "../../data/repository/abstract/IElementRepository";
import { IPointRepository } from "../../data/repository/abstract/IPointRepository";
import { IPointTypeRepository } from "../../data/repository/abstract/IPointTypeRepository";
import { IPointService } from "../abstract/IPoint.service";
import { ServiceAbstract } from "../abstract/ServiceAbstract";
import { LogAspectClass } from "../../core/aspects/Logging/LogAspect";

@injectable()
@LogAspectClass()
export class PointManager extends ServiceAbstract implements IPointService{
    private _pointDal:IPointRepository
    private _elementDal:IElementRepository
    private _pointTypeDal:IPointTypeRepository
    constructor() {
        super()
        this._pointDal=DataContainer.get<IPointRepository>(DataTypes.IPointRepository)
        this._elementDal=DataContainer.get<IElementRepository>(DataTypes.IElementRepository)
        this._pointTypeDal=DataContainer.get<IPointTypeRepository>(DataTypes.IPointTypeRepository)
    }
    async GetAllAsync(userId: string): Promise<CustomResponse<PointDTO[]>> {
        return this.BaseGetAllAsync(userId,{},this._pointDal,Point,PointDTO)
    }
    async GetWhereAsync(userId: string, filter: Partial<PointDTO>): Promise<CustomResponse<PointDTO[]>> {
        return this.BaseGetWhereAsync(userId,filter,this._pointDal,Point,PointDTO)
    }
    async GetAsync(userId: string, entityId: number): Promise<CustomResponse<PointDTO>> {
        return this.BaseGetAsync(entityId,userId,this._pointDal,Point,PointDTO)
    }
    async AddAllAsync(userId: string, entities: PointDTO[]): Promise<CustomResponse<PointDTO[]>> {
        if(!await this.CheckElementAndPointTypeIds(userId,entities)) return CustomResponse.Fail(400,`User havent element or pointType`)
        return await this.BaseAddAllAsync(entities,this._pointDal,Point,PointDTO)
    }
    async UpdateAllAsync(userId: string, entities: PointDTO[]): Promise<CustomResponse<any>> {
        if(!await this.CheckElementAndPointTypeIds(userId,entities)) return CustomResponse.Fail(400,`User havent element or pointType`)
        return await this.BaseUpdateAllAsync(entities,this._pointDal,Point,PointDTO,async ()=>{
            const result=await this._pointDal.GetWhereAsync(userId,{Id:entities.map(x=>x.Id)})
            if (result.length != entities.length) return false
            return true
        })
    }
    async DeleteAllAsync(userId: string, ids: number[]): Promise<CustomResponse<any>> {
        return await this.BaseDeleteAllAsync(ids,this._pointDal,async ()=>{
            const result=await this._pointDal.GetWhereAsync(userId,{id:ids})
            if (result.length != ids.length) return false
            return true
        })
    }

    async CheckElementAndPointTypeIds(userId: string, entities: PointDTO[]):Promise<boolean>{
        const pointTypes=await this._pointTypeDal.GetAllAsync(userId)
        const pointTypeIds=pointTypes.map(x=>x.Id)
        const elements=await this._elementDal.GetWhereAsync(userId,{Id:entities.map(x=>x.ElementId)})
        const elementIds=elements.map(x=>x.Id)
        await this._elementDal.CommitAsync(true)
        await this._pointTypeDal.CommitAsync(true)
        for (let i = 0; i < entities.length; i++) {
            const entity = entities[i]
            if(!elementIds.includes(entity.ElementId)) return false
            if(!pointTypeIds.includes(entity.PointTypeId)) return false
        }
        return true
    }

}