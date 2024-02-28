import { injectable } from "inversify";
import { CustomResponse } from "../../core/dtos/CustomResponse";
import { DrawDTO } from "../../core/dtos/concrete/DrawDTO";
import {DataLayerTypes} from "../../data/dependencyresolvers/DataTypes";
import {DataContainer} from "../../data/dependencyresolvers/dataInstanceFactory.config";
import { IDrawService } from "../abstract/IDraw.service";
import { ServiceAbstract } from "../abstract/ServiceAbstract";
import { ILayerRepository } from "../../data/repository/abstract/ILayerRepository";
import { Layer } from "../../core/models/concrete/Layer";
import { LayerDTO } from "../../core/dtos/concrete/LayerDTO";
import { LogAspectClass } from "../../core/aspects/Logging/LogAspect";
import { ILayerService } from "../abstract/ILayer.service";


@injectable()
@LogAspectClass()
export class LayerManager extends ServiceAbstract implements ILayerService{
    private _layerDal:ILayerRepository
    constructor(){
        super()
        this._layerDal=DataContainer.get<ILayerRepository>(DataLayerTypes.ILayerRepository)
    }
    GetAllAsync(userId: string): Promise<CustomResponse<LayerDTO[]>> {
        throw new Error("Method not implemented.");
    }
    GetWhereAsync(userId: string, filter: Partial<LayerDTO>): Promise<CustomResponse<LayerDTO[]>> {
        throw new Error("Method not implemented.");
    }
    GetAsync(userId: string, entityId: string): Promise<CustomResponse<LayerDTO>> {
        throw new Error("Method not implemented.");
    }
    async AddAllAsync(userId: string, entities: LayerDTO[]): Promise<CustomResponse<LayerDTO[]>> {
        return await this.BaseAddAllAsync(entities,this._layerDal,Layer,LayerDTO)
    }
    UpdateAllAsync(userId: string, entities: LayerDTO[]): Promise<CustomResponse<any>> {
        throw new Error("Method not implemented.");
    }
    DeleteAllAsync(userId: string, ids: string[]): Promise<CustomResponse<any>> {
        throw new Error("Method not implemented.");
    }
    
    

}