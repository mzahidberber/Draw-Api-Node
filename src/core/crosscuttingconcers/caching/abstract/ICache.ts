

export interface ICache{
    addAsync(key:string,value:any):Promise<boolean>
    deleteAsync(key:string):Promise<boolean>
    updateAsync(key:string,value:any):Promise<boolean>
    getAsync(key:string):Promise<any>
    getAllAsync(key:string):Promise<any>
}