import {IEntity} from "../../core/models/abstract/IEntity";
import {IEntityRepository} from "../../data/repository/abstract/IEntityRepository";
import { CustomResponse } from "../../core/dtos/CustomResponse";
import { serviceMapper } from "../mapper/serviceMapper";
import { injectable } from "inversify";

@injectable()
export class ServiceAbstract{
    
    protected async BaseGetAllAsync<TDTO,T extends IEntity<any>>(
        userId:string,
        filter: Partial<TDTO>,
        dal:IEntityRepository<T>,
        type:new()=>T,
        typeDTO:new()=>TDTO):Promise<CustomResponse<TDTO[]>>
    {
        const entities=await dal.GetWhereAsync(userId,filter)
        await dal.CommitAsync(true)
        return CustomResponse.Success(await serviceMapper.mapArrayAsync(entities,type,typeDTO))
    }

    protected async BaseGetWhereAsync<TDTO,T extends IEntity<any>>(
        userId:string,
        filter: Partial<TDTO>,
        dal:IEntityRepository<T>,
        type:new()=>T,
        typeDTO:new()=>TDTO):Promise<CustomResponse<TDTO[]>>
    {
        const entities=await dal.GetWhereAsync(userId,filter)
        await dal.CommitAsync(true)
        return CustomResponse.Success(await serviceMapper.mapArrayAsync(entities,type,typeDTO))
    }

    protected async BaseGetAsync<TDTO,T extends IEntity<any>>(
        entityId: string,
        userId: string,
        dal:IEntityRepository<T>,
        type:new()=>T,
        typeDTO:new()=>TDTO):Promise<CustomResponse<TDTO>>
    {
        const entity=await dal.GetByIdAsync(userId,entityId)
        await dal.CommitAsync(true)
        if (entity)
            return CustomResponse.Success(await serviceMapper.mapAsync(entity,type,typeDTO))
        else
            return CustomResponse.Fail(400,"Entity Not Found!")
    }


    protected async BaseAddAllAsync<TDTO,T extends IEntity<any>>(
        entities: TDTO[],
        dal:IEntityRepository<T>,
        type:new()=>T,
        typeDTO:new()=>TDTO)
        :Promise<CustomResponse<TDTO[]>>
    {
        const result=await dal.AddAsync(await serviceMapper.mapArrayAsync(entities,typeDTO,type))
        await dal.CommitAsync(result.isSuccess)
        if (result.isSuccess)
            return CustomResponse.Success(result.data?await serviceMapper.mapArrayAsync(result.data,type,typeDTO):null)
        else
            return CustomResponse.Fail(400,result.error??"Entities cant add")
    }

    protected async BaseUpdateAllAsync<TDTO,T extends IEntity<any>>(
        entities: TDTO[],
        dal:IEntityRepository<T>,
        type:new()=>T,
        typeDTO:new()=>TDTO,
        checkUserIds:(()=>Promise<boolean>) | null = null
        
        ):Promise<CustomResponse<TDTO[]>>
    {
        if(checkUserIds) {
            const checkResult=await checkUserIds()
            if(!checkResult)
                return CustomResponse.Fail(400,"Entities not found")
        }
        const result=await dal.UpdateAsync(await serviceMapper.mapArrayAsync(entities,typeDTO,type))
        await dal.CommitAsync(result.isSuccess)
        if (result.isSuccess)
            return CustomResponse.Success(result.data?await serviceMapper.mapArrayAsync(result.data,type,typeDTO):null)
        
        return CustomResponse.Fail(400,result.error??"Entities cant update")
    }
    protected async BaseDeleteAllAsync<TDTO,T extends IEntity<any>>(
        ids: string[],
        dal:IEntityRepository<T>,
        checkUserIds:(()=>Promise<boolean>) | null = null)
    {
        if(checkUserIds) {
            const checkResult=await checkUserIds()
            if(!checkResult)
                return CustomResponse.Fail(400,"Entities not found")
        }
        const result=await dal.DeleteAsync(ids)
        await dal.CommitAsync(true)
        if (result)
            return CustomResponse.Success()

        return CustomResponse.Fail(400,"Entities cant delete")
    }
}