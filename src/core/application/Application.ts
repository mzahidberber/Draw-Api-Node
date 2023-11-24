import { IConnect } from "../../data/connect/IConnect";
import { Environment } from "../environment/Environment";
import { logger } from "../crosscuttingconcers/logging/winston/Logger";
import { MongooseConnect } from "../../data/mongoose/MongooseConnect";
import { SequelizeConnect } from "../../data/sequelize/SequelizeConnect";
import { CoreContainer, CoreTypes } from "../dependenctresolvers/controllerInstanceFactory.config";



export class Application{
    private _dbConnect:IConnect

    constructor(private app:()=>void){

        if(Environment.NODE_ENV==="production" && Environment.REDIS_URL==undefined){
            logger.error("redis url not found.app couldnt start!")
            throw new Error("redis url not found.app couldnt start!")
        }

        CoreContainer.get(CoreTypes.ICache)

        if(Environment.DB_TYPE === "nosql")
            this._dbConnect=MongooseConnect.getInstance()
        else if (Environment.DB_TYPE === "sql")
            this._dbConnect=SequelizeConnect.getInstance()
        else{
            logger.error("database type not found in environments.app couldnt start!")
            throw new Error("database type not found in environments.app couldnt start!")
        }
        this._dbConnect.dbConnect(this.app)
    }
} 