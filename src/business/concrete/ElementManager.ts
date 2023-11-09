import { injectable } from "inversify"
import { ServiceAbstract } from "../abstract/ServiceAbstract"
import { IElementService } from "../abstract/IElementService"
import { IElementRepository } from "../../data/repository/abstract/IElementRepository"
import { DataContainer } from "../../data/dependencyresolvers/dataInstanceFactory.config"
import { DataTypes } from "../../data/dependencyresolvers/DataTypes"
import { CustomResponse } from "../../core/dtos/CustomResponse"
import { ElementDTO } from "../../core/dtos/concrete/ElementDTO"
import { Element } from "../../core/models/concrete/Element"


@injectable()
export class ElementManager extends ServiceAbstract implements IElementService{
    private _elementDal:IElementRepository
    constructor(){
        super()
        this._elementDal=DataContainer.get<IElementRepository>(DataTypes.IElementRepository)
    }

    async GetAllAsync(userId: string): Promise<CustomResponse<ElementDTO[]>> {
        return this.BaseGetAllAsync(userId,{},this._elementDal,Element,ElementDTO)
    }

    async GetWhereAsync(userId: string, filter: Partial<ElementDTO>): Promise<CustomResponse<ElementDTO[]>> {
        return this.BaseGetAllAsync(userId,filter,this._elementDal,Element,ElementDTO)
    }

    async GetAsync(userId: string, entityId: number): Promise<CustomResponse<ElementDTO>> {
        return this.BaseGetAsync(entityId,userId,this._elementDal,Element,ElementDTO)
    }

    async AddAllAsync(userId: string, entities: ElementDTO[]): Promise<CustomResponse<ElementDTO[]>> {
        //check userid
        return await this.BaseAddAllAsync(entities,this._elementDal,Element,ElementDTO)
    }

    async UpdateAllAsync(userId: string, entities: ElementDTO[]): Promise<CustomResponse<any>> {
        return await this.BaseUpdateAllAsync(entities,this._elementDal,Element,ElementDTO,async ()=>{
            const result=await this._elementDal.GetWhereAsync(userId,{Id:entities.map(x=>x.Id)})
            if (result.length != entities.length) return false
            return true
        })
    }

    async DeleteAllAsync(userId: string, ids: number[]): Promise<CustomResponse<any>> {
        return await this.BaseDeleteAllAsync(ids,this._elementDal,async ()=>{
            const result=await this._elementDal.GetWhereAsync(userId,{id:ids})
            if (result.length != ids.length) return false
            return true
        })
    }

}