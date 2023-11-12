import { injectable } from "inversify"
import { ServiceAbstract } from "../abstract/ServiceAbstract"
import { DataContainer } from "../../data/dependencyresolvers/dataInstanceFactory.config"
import { DataTypes } from "../../data/dependencyresolvers/DataTypes"
import { CustomResponse } from "../../core/dtos/CustomResponse"
import { IElementTypeService } from "../abstract/IElementType.service"
import { ElementTypeDTO } from "../../core/dtos/concrete/ElementTypeDTO"
import { IElementTypeRepository } from "../../data/repository/abstract/IElementTypeRepository"
import { ElementType } from "../../core/models/concrete/ElementType"


@injectable()
export class ElementTypeManager extends ServiceAbstract implements IElementTypeService{
    private _elementTypeDal:IElementTypeRepository
    constructor(){
        super()
        this._elementTypeDal=DataContainer.get<IElementTypeRepository>(DataTypes.IElementTypeRepository)
    }
    async GetAllAsync(userId: string): Promise<CustomResponse<ElementTypeDTO[]>> {
        return await this.BaseGetAllAsync(userId,{},this._elementTypeDal,ElementType,ElementTypeDTO)
    }
    async GetWhereAsync(userId: string, filter: Partial<ElementTypeDTO>): Promise<CustomResponse<ElementTypeDTO[]>> {
        return await this.BaseGetWhereAsync(userId,filter,this._elementTypeDal,ElementType,ElementTypeDTO)
    }
    async GetAsync(userId: string, entityId: number): Promise<CustomResponse<ElementTypeDTO>> {
        return await this.BaseGetAsync(entityId,userId,this._elementTypeDal,ElementType,ElementTypeDTO)
    }
    async AddAllAsync(userId: string, entities: ElementTypeDTO[]): Promise<CustomResponse<ElementTypeDTO[]>> {
        return await this.BaseAddAllAsync(entities,this._elementTypeDal,ElementType,ElementTypeDTO)
    }
    async UpdateAllAsync(userId: string, entities: ElementTypeDTO[]): Promise<CustomResponse<any>> {
        return await this.BaseUpdateAllAsync(entities,this._elementTypeDal,ElementType,ElementTypeDTO,async ()=>{
            const result=await this._elementTypeDal.GetWhereAsync(userId,{Id:entities.map(x=>x.Id)})
            if (result.length != entities.length) return false
            return true
        })
    }
    async DeleteAllAsync(userId: string, ids: number[]): Promise<CustomResponse<any>> {
        return await this.BaseDeleteAllAsync(ids,this._elementTypeDal,async ()=>{
            const result=await this._elementTypeDal.GetWhereAsync(userId,{id:ids})
            if (result.length != ids.length) return false
            return true
        })
    }

    

}