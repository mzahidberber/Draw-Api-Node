import { injectable } from "inversify";
import { CustomResponse } from "../../core/dtos/CustomResponse";
import { LogAspectClass } from "../../core/aspects/logging/LogAspect";
import { IDrawLayerService } from "../abstract/IDrawLayer.service";
import { ElementDTO } from "../../core/dtos/concrete/ElementDTO";
import { PointGeo } from "../../core/models/others/PointGeo";
import { CommandEnums } from "../../draw/concrete/CommandEnums";
import { DrawAdminastorMultiton } from "../../draw/concrete/DrawAdminastorMultiton";


@injectable()
@LogAspectClass()
export class DrawLayerManager implements IDrawLayerService{
    async addCoordinateAsync(userId: string, point: PointGeo): Promise<CustomResponse<ElementDTO>> {
        const drawAdminastor=DrawAdminastorMultiton.getDrawAdminastor(userId)
        const result=await drawAdminastor.addCoordinateAsync(point)
        if(result.isTrue)
            return CustomResponse.Success(result.element,200)
        else
            return CustomResponse.Fail(200,result.message??"",false)
    }
    async startCommandAsync(userId: string, command: CommandEnums, drawId?: number | undefined, layerId?: number | undefined, penId?: number | undefined): Promise<CustomResponse<boolean>> {
        const drawAdminastor=DrawAdminastorMultiton.getDrawAdminastor(userId)
        const result=await drawAdminastor.startCommandAsync(command,drawId,layerId,penId)
        if(result.isTrue)
            return CustomResponse.Success(true,200)
        else
            return CustomResponse.Fail(200,result.message??"",false)
    }
    async stopCommandAsync(userId: string): Promise<CustomResponse<boolean>> {
        const drawAdminastor=DrawAdminastorMultiton.getDrawAdminastor(userId)
        const result=await drawAdminastor.stopCommandAsync()
        if(result.isTrue)
            return CustomResponse.Success(true,200)
        else
            return CustomResponse.Fail(200,result.message??"",false)
    }
    async setRadiusAsync(userId: string, radius: number): Promise<CustomResponse<boolean>> {
        const drawAdminastor=DrawAdminastorMultiton.getDrawAdminastor(userId)
        const result=await drawAdminastor.setRadiusAsync(radius)
        if(result.isTrue)
            return CustomResponse.Success(true,200)
        else
            return CustomResponse.Fail(200,result.message??"",false)
    }
    async setIsFinish(userId: string): Promise<CustomResponse<ElementDTO>> {
        const drawAdminastor=DrawAdminastorMultiton.getDrawAdminastor(userId)
        const result=await drawAdminastor.setIsFinishAsync()
        if(result.isTrue)
            return CustomResponse.Success(result.element,200)
        else
            return CustomResponse.Fail(200,result.message??"",false)
    }
    

}