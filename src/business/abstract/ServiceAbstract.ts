import {IEntity} from "../../core/models/abstract/IEntity";
import {IEntityRepository} from "../../data/repository/abstract/IEntityRepository";
import { CustomResponse } from "../../core/dtos/CustomResponse";
import { serviceMapper } from "../mapper/serviceMapper";
import { injectable } from "inversify";

@injectable()
export class ServiceAbstract{
    protected async BaseGetAllAsync<TDTO,T extends IEntity<any>>(
        filter: Partial<TDTO>,
        dal:IEntityRepository<T>,
        type:new()=>T,
        typeDTO:new()=>TDTO):Promise<CustomResponse<TDTO[]>>
    {
        const entities=await dal.GetWhereAsync(filter)
        await dal.CommitAsync(true)
        return CustomResponse.Success(await serviceMapper.mapArrayAsync(entities,type,typeDTO))
    }

    protected async BaseGetWhereAsync<TDTO,T extends IEntity<any>>(
        filter: Partial<TDTO>,
        dal:IEntityRepository<T>,
        type:new()=>T,
        typeDTO:new()=>TDTO):Promise<CustomResponse<TDTO[]>>
    {
        const entities=await dal.GetWhereAsync(filter)
        await dal.CommitAsync(true)
        return CustomResponse.Success(await serviceMapper.mapArrayAsync(entities,type,typeDTO))
    }

    protected async BaseGetAsync<TDTO,T extends IEntity<any>>(
        entityId: number,
        userId: string,
        dal:IEntityRepository<T>,
        type:new()=>T,
        typeDTO:new()=>TDTO):Promise<CustomResponse<TDTO>>
    {
        const entities=await dal.GetWhereAsync({id:entityId,userId:userId})
        await dal.CommitAsync(true)
        if (entities.length>0)
            return CustomResponse.Success(await serviceMapper.mapAsync(entities[0],type,typeDTO))
        else
            return CustomResponse.Fail(400,"Entity Not Found!")
    }


    protected async BaseAddAllAsync<TDTO,T extends IEntity<any>>(
        entities: TDTO[],
        dal:IEntityRepository<T>,
        type:new()=>T,
        typeDTO:new()=>TDTO):Promise<CustomResponse<TDTO[]>>
    {
        const result=await dal.AddAsync(await serviceMapper.mapArrayAsync(entities,typeDTO,type))
        await dal.CommitAsync(true)
        //düzenle eklenen entitileri geri dön
        if (result)
            return CustomResponse.Success()
        else
            return CustomResponse.Fail(400,"Entities cant add")
    }

    protected async BaseUpdateAllAsync<TDTO,T extends IEntity<any>>(
        userId: string,
        entities: TDTO[],
        dal:IEntityRepository<T>,
        type:new()=>T,
        typeDTO:new()=>TDTO):Promise<CustomResponse<TDTO[]>>
    {
        const result=await dal.UpdateAsync(await serviceMapper.mapArrayAsync(entities,typeDTO,type))
        await dal.CommitAsync(true)
        //düzenle eklenen entitileri geri dön
        if (result)
            return CustomResponse.Success()
        else
            return CustomResponse.Fail(400,"Entities cant update")
    }
    protected async BaseDeleteAllAsync<TDTO,T extends IEntity<any>>(
        userId: string,
        ids: number[],
        dal:IEntityRepository<T>)
    {
        //idleri kontrol et
        const result=await dal.DeleteAsync(ids)
        await dal.CommitAsync(true)
        //düzenle eklenen entitileri geri dön
        if (result)
            return CustomResponse.Success()
        else
            return CustomResponse.Fail(400,"Entities cant delete")
    }
}