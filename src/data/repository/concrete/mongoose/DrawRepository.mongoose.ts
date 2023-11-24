import { Draw } from "../../../../core/models/concrete/Draw";
import { IDrawRepository } from "../../abstract/IDrawRepository";
import { EntityRepositoryAbstract } from "../../abstract/mongoose/EntityRepositoryAbstract";
import { inject, injectable } from "inversify";
import { DataLayerTypes } from "../../../dependencyresolvers/DataTypes";
import { Model } from "mongoose";

@injectable()
export class MDrawRepository extends EntityRepositoryAbstract<Draw> implements IDrawRepository{
    constructor(@inject(DataLayerTypes.MDrawModel) model :Model<any>,@inject(DataLayerTypes.Draw) type :typeof Draw ){
        super(model,type)
    }
}