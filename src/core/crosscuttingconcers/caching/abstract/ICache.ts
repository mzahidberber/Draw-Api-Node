

export interface ICache{
    addAsync(key:string,value:any,time:number):Promise<boolean>
    isAddAsync(key:string):Promise<boolean>
    removeAsync(key:string):Promise<boolean>
    removeByPatternAsync(pattern:string):Promise<boolean>
    clearAsync():Promise<boolean>
    getAsync(key:string):Promise<string | null>
}