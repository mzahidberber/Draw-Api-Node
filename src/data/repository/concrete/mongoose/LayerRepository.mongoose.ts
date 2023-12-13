import { EntityRepositoryAbstract } from "../../abstract/mongoose/EntityRepositoryAbstract";
import { inject, injectable } from "inversify";
import { DataLayerTypes } from "../../../dependencyresolvers/DataTypes";
import { Model } from "mongoose";
import { Layer } from "../../../../core/models/concrete/Layer";
import { ILayerRepository } from "../../abstract/ILayerRepository";

@injectable()
export class MLayerRepository extends EntityRepositoryAbstract<Layer> implements ILayerRepository{
    constructor(@inject(DataLayerTypes.MLayerModel) model :Model<any>,@inject(DataLayerTypes.Layer) type :typeof Layer ){
        super(model,type)
    }
    GetAllWithElementsAsync(): Promise<Layer[]> {
        throw new Error("Method not implemented.");
    }
}