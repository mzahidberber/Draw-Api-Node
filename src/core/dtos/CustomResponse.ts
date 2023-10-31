import { ErrorDTO } from "./ErrorDTO"



export class CustomResponse<T>{
    data:T | null = null
    statusCode!:number
    error:ErrorDTO | null = null

    constructor(initialValues: Partial<CustomResponse<T>>) {
        Object.assign(this, initialValues);
    }

    static Success<T>(data:T | null = null,statusCode:number=200):CustomResponse<T>{
        return new CustomResponse<T>({
            data:data,
            statusCode:statusCode
        })
    }

    static Fail<T>(statusCode:number,error:ErrorDTO | string,isShow:boolean=false):CustomResponse<T>{
        if (typeof error === "string")
            return new CustomResponse<T>({
                statusCode:statusCode,
                error:new ErrorDTO([error],isShow)
            })
        else
            return new CustomResponse<T>({
                statusCode:statusCode,
                error:error
            })
    }
}