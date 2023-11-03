

export class DataInfo<T>{
    data:T | null
    isSuccess:boolean
    error:string | null

    
    constructor(isSucces:boolean,data:T | null=null,error:string | null = null) {
        this.isSuccess=isSucces
        this.data=data
        this.error=error
    }

}