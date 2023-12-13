import { injectable } from "inversify";
import { CustomResponse } from "../../core/dtos/CustomResponse";
import { RadiusDTO } from "../../core/dtos/concrete/RadiusDTO";
import { IRadiusService } from "../abstract/IRadius.service";
import { ServiceAbstract } from "../abstract/ServiceAbstract";
import { IRadiusRepository } from "../../data/repository/abstract/IRadiusRepository";
import { IElementRepository } from "../../data/repository/abstract/IElementRepository";
import { DataContainer } from "../../data/dependencyresolvers/dataInstanceFactory.config";
import { DataLayerTypes } from "../../data/dependencyresolvers/DataTypes";
import { Radius } from "../../core/models/concrete/Radius";
import { LogAspectClass } from "../../core/aspects/logging/LogAspect";


@injectable()
@LogAspectClass()
export class RadiusManager extends ServiceAbstract implements IRadiusService{
    private _radiusDal:IRadiusRepository
    private _elementDal:IElementRepository
    constructor() {
        super()
        this._radiusDal=DataContainer.get<IRadiusRepository>(DataLayerTypes.IRadiusRepository)
        this._elementDal=DataContainer.get<IElementRepository>(DataLayerTypes.IElementRepository)
    }
    async GetAllAsync(userId: string): Promise<CustomResponse<RadiusDTO[]>> {
        return this.BaseGetAllAsync(userId,{},this._radiusDal,Radius,RadiusDTO)
    }
    async GetWhereAsync(userId: string, filter: Partial<RadiusDTO>): Promise<CustomResponse<RadiusDTO[]>> {
        return this.BaseGetWhereAsync(userId,filter,this._radiusDal,Radius,RadiusDTO)
    }
    async GetAsync(userId: string, entityId: string): Promise<CustomResponse<RadiusDTO>> {
        return this.BaseGetAsync(entityId,userId,this._radiusDal,Radius,RadiusDTO)
    }
    async AddAllAsync(userId: string, entities: RadiusDTO[]): Promise<CustomResponse<RadiusDTO[]>> {
        if(!await this.CheckElementIds(userId,entities)) return CustomResponse.Fail(400,`User havent element `)
        return await this.BaseAddAllAsync(entities,this._radiusDal,Radius,RadiusDTO)
    }
    async UpdateAllAsync(userId: string, entities: RadiusDTO[]): Promise<CustomResponse<any>> {
        if(!await this.CheckElementIds(userId,entities)) return CustomResponse.Fail(400,`User havent element`)
        return await this.BaseUpdateAllAsync(entities,this._radiusDal,Radius,RadiusDTO,async ()=>{
            const result=await this._radiusDal.GetWhereAsync(userId,{Id:entities.map(x=>x.id)})
            if (result.length != entities.length) return false
            return true
        })
    }
    async DeleteAllAsync(userId: string, ids: string[]): Promise<CustomResponse<any>> {
        return await this.BaseDeleteAllAsync(ids,this._radiusDal,async ()=>{
            const result=await this._radiusDal.GetWhereAsync(userId,{id:ids})
            if (result.length != ids.length) return false
            return true
        })
    }

    async CheckElementIds(userId: string, entities: RadiusDTO[]):Promise<boolean>{
        const elements=await this._elementDal.GetWhereAsync(userId,{Id:entities.map(x=>x.ElementId)})
        const elementIds=elements.map(x=>x.id)
        await this._elementDal.CommitAsync(true)
        for (let i = 0; i < entities.length; i++) {
            const entity = entities[i]
            if(!elementIds.includes(entity.ElementId)) return false
        }
        return true
    }
    
} 