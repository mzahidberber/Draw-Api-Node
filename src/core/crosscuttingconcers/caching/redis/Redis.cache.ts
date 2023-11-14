import {createClient} from "redis"
import { ICache } from "../abstract/ICache";
import { logger } from "../../logging/winston/Logger";
import { Environment } from "../../../environment/Environment";

export class RedisCache implements ICache{
    private client:any
    constructor(){

        if(Environment.NODE_ENV==="development") this.client=createClient()
        if(Environment.NODE_ENV==="production") this.client=createClient({url:Environment.REDIS_URL})
        
        this.client.on("error",(err:any)=>{
            logger.error(err.message)
            throw new Error(err.message)
        })
        this.client.connect().then(()=>{
            logger.info("Success to connect redis server")
        })
    }
    async addAsync(key: string, value: string | number): Promise<boolean> {
        const result=await this.client.set(key,value)
        if(result !== 'OK') return false
        return true
    }
    deleteAsync(key: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    updateAsync(key: string, value: any): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async getAsync(key: string):Promise<any>{
        return await this.client.get(key)
    }
    getAllAsync(key: string):Promise<any> {
        throw new Error("Method not implemented.");
    }

}

// const client=createClient({
  
// })
// client.on("error",(err)=>{
//   console.log(err)
// })
// client.connect().then(e=>{
//   client.set("t1","test").then(e=>{
//     console.log("eklendi")
//   })
// });

// client.get("t1").then(e=>{
//   console.log("data ",e)
// })

// client.hSet('user-session:123', {
//   name: 'John',
//   surname: 'Smith',
//   company: 'Redis',
//   age: 29
// }).then(e=>{
//    client.hGetAll('user-session:123').then(e=>{
//     console.log(JSON.stringify(e, null, 2));
//   })
  
// })