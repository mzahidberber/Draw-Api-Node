import { injectable } from "inversify"
import { ServiceAbstract } from "../abstract/ServiceAbstract"
import { IElementService } from "../abstract/IElement.service"
import { IElementRepository } from "../../data/repository/abstract/IElementRepository"
import { DataContainer } from "../../data/dependencyresolvers/dataInstanceFactory.config"
import { DataLayerTypes } from "../../data/dependencyresolvers/DataTypes"
import { CustomResponse } from "../../core/dtos/CustomResponse"
import { ElementDTO } from "../../core/dtos/concrete/ElementDTO"
import { Element } from "../../core/models/concrete/Element"
import { ILayerRepository } from "../../data/repository/abstract/ILayerRepository"
import { IPenRepository } from "../../data/repository/abstract/IPenRepository"
import { IElementTypeRepository } from "../../data/repository/abstract/IElementTypeRepository"
import { LogAspectClass } from "../../core/aspects/Logging/LogAspect"


@injectable()
@LogAspectClass()
export class ElementManager extends ServiceAbstract implements IElementService{
    private _elementDal:IElementRepository
    private _layerDal:ILayerRepository
    private _penDal:IPenRepository
    private _elementTypeDal:IElementTypeRepository
    constructor(){
        super()
        this._elementDal=DataContainer.get<IElementRepository>(DataLayerTypes.IElementRepository)
        this._layerDal=DataContainer.get<ILayerRepository>(DataLayerTypes.ILayerRepository)
        this._penDal=DataContainer.get<IPenRepository>(DataLayerTypes.IPenRepository)
        this._elementTypeDal=DataContainer.get<IElementTypeRepository>(DataLayerTypes.IElementTypeRepository)
    }

    async GetAllAsync(userId: string): Promise<CustomResponse<ElementDTO[]>> {
        return this.BaseGetAllAsync(userId,{},this._elementDal,Element,ElementDTO)
    }

    async GetWhereAsync(userId: string, filter: Partial<ElementDTO>): Promise<CustomResponse<ElementDTO[]>> {
        return this.BaseGetAllAsync(userId,filter,this._elementDal,Element,ElementDTO)
    }

    async GetAsync(userId: string, entityId: string): Promise<CustomResponse<ElementDTO>> {
        return this.BaseGetAsync(entityId,userId,this._elementDal,Element,ElementDTO)
    }

    async CheckLayerAndPenIds(userId: string, entities: ElementDTO[]):Promise<boolean>{
        const elementTypes=await this._elementTypeDal.GetAllAsync(userId)
        const elementTypesIds=elementTypes.map(x=>x.id)
        const layers=await this._layerDal.GetWhereAsync(userId,{Id:entities.map(x=>x.LayerId)})
        const layerIds=layers.map(x=>x.id)
        const pens=await this._penDal.GetWhereAsync(userId,{Id:entities.map(x=>x.PenId)})
        const penIds=pens.map(x=>x.id)
        await this._layerDal.CommitAsync(true)
        await this._penDal.CommitAsync(true)
        await this._elementTypeDal.CommitAsync(true)
        for (let i = 0; i < entities.length; i++) {
            const entity = entities[i]
            if(!layerIds.includes(entity.LayerId)) return false
            if(!penIds.includes(entity.PenId)) return false
            if(!elementTypesIds.includes(entity.ElementTypeId)) return false
        }
        return true
    }

    async AddAllAsync(userId: string, entities: ElementDTO[]): Promise<CustomResponse<ElementDTO[]>> {
        if(!await this.CheckLayerAndPenIds(userId,entities)) return CustomResponse.Fail(400,`User havent layer or pen Or there isnt this element type`)
        return await this.BaseAddAllAsync(entities,this._elementDal,Element,ElementDTO)
    }

    async UpdateAllAsync(userId: string, entities: ElementDTO[]): Promise<CustomResponse<any>> {
        if(!await this.CheckLayerAndPenIds(userId,entities)) return CustomResponse.Fail(400,`User havent layer or pen Or there isnt this element type`)
        return await this.BaseUpdateAllAsync(entities,this._elementDal,Element,ElementDTO,async ()=>{
            const result=await this._elementDal.GetWhereAsync(userId,{id:entities.map(x=>x.id)})
            if (result.length != entities.length) return false
            return true
        })
    }

    async DeleteAllAsync(userId: string, ids: string[]): Promise<CustomResponse<any>> {
        return await this.BaseDeleteAllAsync(ids,this._elementDal,async ()=>{
            const result=await this._elementDal.GetWhereAsync(userId,{id:ids})
            if (result.length != ids.length) return false
            return true
        })
    }

}