import {createClient} from "redis"
import { ICache } from "../abstract/ICache";
import { logger } from "../../logging/winston/Logger";
import { Environment } from "../../../environment/Environment";
import { injectable } from "inversify";

@injectable()
export class RedisCache implements ICache{
    private client:ReturnType<typeof createClient>
    constructor(){
        if(Environment.NODE_ENV==="production") this.client=createClient({url:Environment.REDIS_URL})
        else this.client=createClient()
        
        this.client.on("error",(err:any)=>{
            logger.error(`redis : ${err.message}`)
            throw new Error(err.message)
        })
        this.client.connect().then(()=>{
            logger.info("success to connect redis server")
        })
    }
    async addAsync(key: string, value: any, time: number): Promise<boolean> {
        const result=await this.client.set(key,JSON.stringify(value),{EX:60*time})
        if(result !== 'OK') return false
        return true
    }
    async isAddAsync(key: string): Promise<boolean> {
        const result=await this.client.exists(key)
        return result===1?true:false
    }
    async removeAsync(key: string): Promise<boolean> {
        const result=await this.client.del([key])
        return result===1?true:false
    }
    async removeByPatternAsync(pattern: string): Promise<boolean> {
        const keys=await this.client.keys(pattern)
        if(keys.length>0){
            const result=await this.client.del(keys)
            return result===1?true:false
        }
        return true 
    }
    async clearAsync(): Promise<boolean> {
        const result=await this.client.flushAll()
        if(result !== 'OK') return false
        return true
    }
    async getAsync(key: string): Promise<string | null> {
        const result=await this.client.get(key)
        return result!=null?JSON.parse(result):result
    }
    

}