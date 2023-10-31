import {IEntityRepository} from "./IEntityRepository";
import {Layer} from "../../../core/models/concrete/Layer";

export interface ILayerRepository extends IEntityRepository<Layer>{
    GetAllWithElementsAsync():Promise<Layer[]>
}
