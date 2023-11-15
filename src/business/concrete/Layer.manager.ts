import { injectable } from "inversify";
import { CustomResponse } from "../../core/dtos/CustomResponse";
import { DrawDTO } from "../../core/dtos/concrete/DrawDTO";
import {DataTypes} from "../../data/dependencyresolvers/DataTypes";
import {DataContainer} from "../../data/dependencyresolvers/dataInstanceFactory.config";
import { IDrawService } from "../abstract/IDraw.service";
import { ServiceAbstract } from "../abstract/ServiceAbstract";
import { ILayerRepository } from "../../data/repository/abstract/ILayerRepository";
import { Layer } from "../../core/models/concrete/Layer";
import { LayerDTO } from "../../core/dtos/concrete/LayerDTO";
import { LogAspectClass } from "../../core/aspects/logging/LogAspect";


@injectable()
@LogAspectClass()
export class LayerManager extends ServiceAbstract implements IDrawService{
    private _layerDal:ILayerRepository
    constructor(){
        super()
        this._layerDal=DataContainer.get<ILayerRepository>(DataTypes.ILayerRepository)
    }
    GetLayersAsync(userId: string, drawId: number): Promise<CustomResponse<DrawDTO[]>> {
        throw new Error("Method not implemented.");
    }
    async GetAllAsync(userId: string): Promise<CustomResponse<DrawDTO[]>> {
        return await this.BaseGetAllAsync(userId,{},this._layerDal,Layer,LayerDTO)
    }
    GetWhereAsync(userId: string, filter: Partial<DrawDTO>): Promise<CustomResponse<DrawDTO[]>> {
        throw new Error("Method not implemented.");
    }
    GetAsync(userId: string, entityId: number): Promise<CustomResponse<DrawDTO>> {
        throw new Error("Method not implemented.");
    }
    AddAllAsync(userId: string, entities: DrawDTO[]): Promise<CustomResponse<DrawDTO[]>> {
        throw new Error("Method not implemented.");
    }
    UpdateAllAsync(userId: string, entities: DrawDTO[]): Promise<CustomResponse<any>> {
        throw new Error("Method not implemented.");
    }
    DeleteAllAsync(userId: string, entities: number[]): Promise<CustomResponse<any>> {
        throw new Error("Method not implemented.");
    }
    

}