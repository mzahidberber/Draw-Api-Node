import { injectable } from "inversify";
import { CustomResponse } from "../../core/dtos/CustomResponse";
import { ServiceAbstract } from "../abstract/ServiceAbstract";
import { IElementRepository } from "../../data/repository/abstract/IElementRepository";
import { DataContainer } from "../../data/dependencyresolvers/dataInstanceFactory.config";
import { DataLayerTypes } from "../../data/dependencyresolvers/DataTypes";
import { ISSAngleService } from "../abstract/ISSAngle.service";
import { SSAngleDTO } from "../../core/dtos/concrete/SSAngleDTO";
import { SSAngle } from "../../core/models/concrete/SSAngle";
import { ISSAngleRepository } from "../../data/repository/abstract/ISSAngleRepository";
import { LogAspectClass } from "../../core/aspects/logging/LogAspect";


@injectable()
@LogAspectClass()
export class SSAngleManager extends ServiceAbstract implements ISSAngleService{
    private _ssangleDal:ISSAngleRepository
    private _elementDal:IElementRepository
    constructor() {
        super()
        this._ssangleDal=DataContainer.get<ISSAngleRepository>(DataLayerTypes.ISSAngleRepository)
        this._elementDal=DataContainer.get<IElementRepository>(DataLayerTypes.IElementRepository)
    }
    async GetAllAsync(userId: string): Promise<CustomResponse<SSAngleDTO[]>> {
        return this.BaseGetAllAsync(userId,{},this._ssangleDal,SSAngle,SSAngleDTO)
    }
    async GetWhereAsync(userId: string, filter: Partial<SSAngleDTO>): Promise<CustomResponse<SSAngleDTO[]>> {
        return this.BaseGetWhereAsync(userId,filter,this._ssangleDal,SSAngle,SSAngleDTO)
    }
    async GetAsync(userId: string, entityId: number): Promise<CustomResponse<SSAngleDTO>> {
        return this.BaseGetAsync(entityId,userId,this._ssangleDal,SSAngle,SSAngleDTO)
    }
    async AddAllAsync(userId: string, entities: SSAngleDTO[]): Promise<CustomResponse<SSAngleDTO[]>> {
        if(!await this.CheckElementIds(userId,entities)) return CustomResponse.Fail(400,`User havent element `)
        return await this.BaseAddAllAsync(entities,this._ssangleDal,SSAngle,SSAngleDTO)
    }
    async UpdateAllAsync(userId: string, entities: SSAngleDTO[]): Promise<CustomResponse<any>> {
        if(!await this.CheckElementIds(userId,entities)) return CustomResponse.Fail(400,`User havent element`)
        return await this.BaseUpdateAllAsync(entities,this._ssangleDal,SSAngle,SSAngleDTO,async ()=>{
            const result=await this._ssangleDal.GetWhereAsync(userId,{Id:entities.map(x=>x.Id)})
            if (result.length != entities.length) return false
            return true
        })
    }
    async DeleteAllAsync(userId: string, ids: number[]): Promise<CustomResponse<any>> {
        return await this.BaseDeleteAllAsync(ids,this._ssangleDal,async ()=>{
            const result=await this._ssangleDal.GetWhereAsync(userId,{id:ids})
            if (result.length != ids.length) return false
            return true
        })
    }

    async CheckElementIds(userId: string, entities: SSAngleDTO[]):Promise<boolean>{
        const elements=await this._elementDal.GetWhereAsync(userId,{Id:entities.map(x=>x.ElementId)})
        const elementIds=elements.map(x=>x.Id)
        await this._elementDal.CommitAsync(true)
        for (let i = 0; i < entities.length; i++) {
            const entity = entities[i]
            if(!elementIds.includes(entity.ElementId)) return false
        }
        return true
    }
    
} 