


export class ErrorDTO{
    Errors:string[]=[]
    IsShow:boolean

    constructor(errors:string[],isShow:boolean=false){
        this.Errors=errors
        this.IsShow=isShow

    }
}