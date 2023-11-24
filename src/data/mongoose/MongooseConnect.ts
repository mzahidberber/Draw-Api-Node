import { connect } from 'mongoose'
import { logger } from '../../core/crosscuttingconcers/logging/winston/Logger'
import { Environment } from '../../core/environment/Environment'
import { IConnect } from '../connect/IConnect'


export class MongooseConnect implements IConnect{
    private static _instance?:MongooseConnect

    private constructor(){}

    public static getInstance():MongooseConnect{
        if(this._instance == undefined){
          this._instance=new MongooseConnect()
        }
        return this._instance
      }

    public dbConnect(app:()=>void): void {
        if(Environment.MONGODB_CSTR){
            connect(Environment.MONGODB_CSTR)
                .then(()=>{
                    logger.info(`nosql database[mongoose] connected environment : ${Environment.NODE_ENV}`)
                    app()
            }).catch(err=>{
                logger.error(`mongoose database couldnt connect : ${err}`)
            })
        }else
            logger.error(`mongoose database couldnt connect : connection string not found`)
    }   
    
}

// new MDrawModel({Name:"t"})
//             .save()
//             .then(e=>{
//                 console.log("save",e)
//             }).catch(err=>{
//                 console.error(err)
//             })
        
//         MDrawModel.find({Name:{$eq:"test"},Id:{}}).then(e=>{
//             console.log(e)
//         })


